import "./post.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const { user } = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Post({post}){
    return(
        <div class="post">
            <img class="post-img" src={post.image_path}/>
            <div class="title">
                <Link to={`/postDetail/${post.id}`}>
                    <p>{post.title}</p>
                </Link>
            </div>
        </div>
    )
}