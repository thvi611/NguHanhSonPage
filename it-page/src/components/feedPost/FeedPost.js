import "./feedPost.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
//import { AuthContext } from "../../context/AuthContext";
// const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function FeedPost() {
    const [posts, setPosts] = useState([]);
    const location = useLocation()
    const { tag } = location.state
    if (tag) tag = 'all';
    useEffect(() => {
        const fetchPosts = async () => {
            if (!tag === 'all') {
                const response = await fetch(`http://localhost:8080/api/post/category/${tag}`);
                const data = await response.json();
                return setPosts(data);
            } else {
                const response_1 = await fetch('http://localhost:8080/api/post');
                const data_1 = await response_1.json();
                return setPosts(data_1);
            }
        }
        fetchPosts();
    },[tag]);
    return (
        <div id="list-post">
            {posts.map((p) => (
                <Post key={p._id} post={p} />
            ))}
        </div>
    )
}