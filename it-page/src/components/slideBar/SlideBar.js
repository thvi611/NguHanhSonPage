import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import SlideImg from "../slideImg/SlideImg";

export default function SlideBar() {
    const [posts, setPosts] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`http://localhost:80/api/post`);
        const data = await response.json();
        return setPosts(data);
    }
    useEffect(() => {
        fetchData();
    }, [])

    return (
        <Carousel style={{marginTop:60}}>
            {posts.slice(0, 5).map((p) => (
                <Carousel.Item interval={5000} key={p.id}>
                    <SlideImg key={p.id} post={p} type={'post'} />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}