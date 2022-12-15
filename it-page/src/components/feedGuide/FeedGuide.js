import "./feedGuide.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
//import { AuthContext } from "../../context/AuthContext";
import Post from "../post/Post";
// const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function FeedGuide(){
    const [posts,setPosts] = useState([]);
    const location = useLocation()
    var tag ="all";
    localStorage.setItem('currentPage','guide');
    if (location.state){
        tag = location.state.tag;
    }else{
        tag="all";
    }
    useEffect(() => {
        const fetchPosts = async () => {
            if(!tag==='all'){
                const response = await fetch(`http://localhost:80/api/guide/category/${tag}`);
                const data = await response.json();
                return setPosts(data);
            }else{
                const response = await fetch(`http://localhost:80/api/guide`);
                const data = await response.json();
                return setPosts(data);
            }
        }
        console.log(tag);
        fetchPosts();
    },[tag]);
    return(
        <div id="list-guide">
            {posts.map((p) => (
                <Post key={p.id} post={p} type={'guide'}/>
            ))}
        </div>
    );
}