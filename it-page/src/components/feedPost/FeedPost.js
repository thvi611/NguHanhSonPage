import "./feedPost.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const { user } = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function FeedPost(){
    const [posts,setPosts] = useState([]);
    const location = useLocation()
    const { tag } = location.state
    if(tag) tag='all';
    const fetchPosts = () => {
        if(!tag=='all'){
            return fetch(`http://localhost:8080/api/post/category/${tag}`)
              .then((response) => response.json())
              .then((data) => setPosts(data));
        }else{
            return fetch('http://localhost:8080/api/post')
            .then((response) => response.json())
            .then((data) => setPosts(data));
        }
    }
    useEffect(() => {
        fetchPosts();
    })[tag];
    return(
        <div id="list-post">
            {posts.map((p) => (
                <Post key={p._id} post={p} />
            ))}
        </div>
    )
}