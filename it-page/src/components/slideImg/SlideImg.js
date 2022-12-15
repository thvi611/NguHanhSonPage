import "./slideImg.css";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function SlideImg({post, type}){
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            return (setImages(post.images));
        }
        fetchImages();
    }, []);

    const renderImage = (image) => {
        if (image.url.includes("/images/"))
            return(
                <img
                    className="d-block w-100"
                    src={"http://localhost:80/storage" + image.url}
                    alt="Image One"
                    style={{height: 200,width: "100%",objectFit:"cover",backgroundColor:"green"}}
                />
            );
        else
            return(
                <img
                    className="d-block w-100"
                    src={image.url}
                    alt="Image One"
                    style={{height: 200,width: "100%",objectFit:"cover",backgroundColor:"green"}}
                />
            );
    }

    return(
        <div>
            {images.map((image) => (
                renderImage(image)
            ))}
            <Carousel.Caption>
                <Link to={`/postDetail/${type}/${post.id}`} style={{color:"white",textDecoration: "none",fontSize:30}}>
                    {post.title}
                </Link>
                <p className="cutoff-text" style={{color:"white"}}>{post.content}</p>
            </Carousel.Caption>
        </div>
    );
}