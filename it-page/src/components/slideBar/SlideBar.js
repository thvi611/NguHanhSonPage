import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';

export default function SlideBar() {
    const [posts, setPosts] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`http://localhost:8080/api/post`);
        const data = await response.json();
        return setPosts(data);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Carousel style={{marginTop:60}}>
            {posts.slice(0, 5).map((p) => (
                <Carousel.Item interval={5000} key={p.id}>
                    <img
                        className="d-block w-100"
                        source={p.images_path}
                        alt="Image One"
                        style={{height: 200,width: "100%",objectFit:"cover",backgroundColor:"green"}}
                    />
                    <Carousel.Caption>
                        <Link to={`/postDetail/${p.id}`} style={{color:"black",textDecoration: "none",fontSize:30}}>
                            {p.title}
                        </Link>
                        <p className="cutoff-text" style={{color:"black"}}>{p.content}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}