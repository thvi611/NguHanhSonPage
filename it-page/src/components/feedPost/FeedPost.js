import "./feedPost.css";
import { Link, useLocation } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import axios from 'axios';
//import { AuthContext } from "../../context/AuthContext";
// const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function FeedPost() {
    const [posts, setPosts] = useState([]);
    const location = useLocation()
    var tag = [];
    if (location.state) {
        tag = location.state
    } else {
        tag = "all";
    }
    useEffect(() => {
        const fetchPosts = async () => {
            if (!tag === 'all') {
                // const response = await fetch(`http://localhost:8080/api/post/category/${tag}`);
                // const data = await response.json();
                // return setPosts(data);
                axios.get(`http://localhost:8080/api/post/category/${tag}`)
                    .then(res => {
                        const data = res.data;
                        setPosts(data);
                    })
                    .catch(error => console.log(error));
            } else {
                // const response_1 = await fetch('http://localhost:8080/api/post');
                // const data_1 = await response_1.json();
                // return setPosts(data_1);
                axios.get(`http://localhost:8080/api/post`)
                    .then(res => {
                        const data = res.data;
                        setPosts(data);
                    })
                    .catch(error => console.log(error));
            }
        }
        console.log(tag);
        fetchPosts();
    }, [tag]);
    return (
        <div id="list-post">
            {posts.map((p) => {
                if(tag==="all"){
                    <Post key={p.id} post={p} />
                }
                else{
                    <Post key={p.posts.id} post={p.posts} />
                }
            })}
        </div>
    )
}