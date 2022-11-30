import "./feedPost.css";
import {useLocation } from "react-router-dom";
import {useEffect, useState } from "react";
import Post from "../post/Post";
//import { AuthContext } from "../../context/AuthContext";
// const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function FeedPost() {
    const [posts, setPosts] = useState([]);
    const location = useLocation()
    var tag;
    if (location.state){
        tag = location.state.tag;
    }else{
        tag="all";
    }
    useEffect(() => {
        const fetchPosts = async () => {
            if (!tag === 'all') {
                const response = await fetch(`http://localhost:8080/api/post/category/${tag}`);
                const data = await response.json();
                return setPosts(data);
                // axios.get(`http://localhost:8080/api/post/category/${tag}`)
                //     .then(res => {
                //         const data = res.data;
                //         setPosts(data);
                //     })
                //     .catch(error => console.log(error));
            } else {
                const response = await fetch('http://localhost:8080/api/post');
                const data = await response.json();
                return setPosts(data);
                // axios.get(`http://localhost:8080/api/post`)
                //     .then(res => {
                //         const data = res.data;
                //         setPosts(data);
                //     })
                //     .catch(error => console.log(error));
            }
        }
        console.log(tag);
        fetchPosts();
    }, [tag]);
    return (
        <div id="list-post">
            {posts.map((p) => (
                <Post key={p.id} post={p} />
            ))}
        </div>
    )
}