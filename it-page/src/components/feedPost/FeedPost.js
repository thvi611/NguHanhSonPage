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
    var tag ="all";
    localStorage.setItem('currentPage','home');
    if (location.state){
        tag = location.state.tag;
    }else{
        tag="all";
    }
    useEffect(() => {
        const fetchPosts = async () => {
            if (tag === 'all') {
                const response = await fetch('https://ff53-1-53-200-28.ap.ngrok.io/api/post', {
                    method: "get",
                    headers: new Headers({
                      "ngrok-skip-browser-warning": "69420",
                    }),
                  });
                const data = await response.json();
                return setPosts(data);
            } else {
                const response = await fetch(`https://ff53-1-53-200-28.ap.ngrok.io/api/post/category/${tag}`, {
                    method: "get",
                    headers: new Headers({
                      "ngrok-skip-browser-warning": "69420",
                    }),
                  });
                const data = await response.json();
                return setPosts(data);
            }
        }
        console.log(tag);
        fetchPosts();
    }, [tag]);
    return (
        <div id="list-post">
            {posts.map((p) => (
                <Post key={p.id} post={p} type={'post'} />
            ))}
        </div>
    )
}