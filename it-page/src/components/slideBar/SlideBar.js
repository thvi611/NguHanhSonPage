import "./slideBar.css";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import slideBar from "./slide.js";

export default function SlideBar(){
    const [posts,setPosts] = useState([]);
    const [guides, setGuides] = useState([]);
    const [slide, setSlide] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/post/')
            .then((response) => response.json())
            .then((data) => setPosts(data));
        
        fetch('http://localhost:8080/api/guide/')
            .then((response) => response.json())
            .then((data) => setGuides(data));
        posts = posts.sort((a,b)=> a.numView - b.numView);
        guides = guides.sort((a,b)=> a.numView - b.numView);
        const slidePosts = posts.slice(0,5);
        const slideGuides = guides.slice(0,5);
        setSlide([...slidePosts, ...slideGuides]);

        
    }, []);
    return(
        <div className="content-width">
            <div className="slideshow">
                <div className="slideshow-items">
                    <div className="item">
                        {slide.map((s) => (
                            <><div className="item-image-container">
                                <img className="item-image" src={s.image_path} />
                            </div>
                            <div className="item-description">
                                <span className="vertical-part">
                                    <Link to={`/postDetail/${s.id}`}>{s.title}</Link>
                                </span>
                                <br />
                                <span className="vertical-part">
                                    <b className="cutoff-text">{s.content}</b>
                                </span>
                            </div></>
                        ))}
                    </div>
                    <div className="controls">
                        <ul>
                            {slide.map((s,index)=>(
                                <li className="control" data-index={index}></li>
                            ))}    
                        </ul>
                    </div>
                </div>
            </div>
            {slideBar}
        </div>
    )
}
