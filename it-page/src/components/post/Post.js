import "./post.css";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Post({post, type}){
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
                <img className="post-img" src={"http://localhost:80/storage" + image.url} alt=''/>
            );
        else
            return(
                <img className="post-img" src={image.url} alt=''/>
            );
    }

    return(
        <div className="post">
            {images.map((image) => (
                renderImage(image)
            ))}
            <div className="title">
                <Link to={`/postDetail/${type}/${post.id}`}>
                    {post.title}
                </Link>
            </div>
        </div>
    );
}