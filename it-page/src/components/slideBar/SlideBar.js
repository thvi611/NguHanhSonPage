import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { useContext, useEffect, useState } from "react";
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function DemoCarousel() {
    const[posts, setPosts] = useState([]);
    const fetchData = async () => {
        axios.get(`http://localhost:8080/api/post`)
            .then(res => {
                const data = res.data;
                setPosts( data );
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <Carousel>
            {posts.slice(0,5).map(p=>{
                <div>
                    <img alt="" src={p.image_path} />
                    <p className="legend">{p.title}</p>
                </div>
            })}
        </Carousel>
    );
}