import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import SlideImg from "../slideImg/SlideImg";

export default function SlideBar() {
    const [posts, setPosts] = useState([]);
    const fetchData = async () => {
        const response = await fetch(`https://ff53-1-53-200-28.ap.ngrok.io/api/post`, {
            method: "get",
            headers: new Headers({
              "ngrok-skip-browser-warning": "69420",
            }),
          });
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