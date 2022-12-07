import "./post.css";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Post({post}){
    return(
        <div className="post">
            <img className="post-img" alt="" src={post.images[0].url}/>
            <div className="title">
                <Link to={`/postDetail/${post.id}`}>
                    {post.title}
                </Link>
            </div>
        </div>
    );
}