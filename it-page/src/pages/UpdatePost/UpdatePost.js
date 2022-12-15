import React from 'react';
import axios from "axios";
import { useRef, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './UpdatePost.css';

export default function UpdatePost() {
    const title = useRef();
    const content = useRef();
    const category = useRef();
    const [image, setImage] = useState('');
    const navigate = useNavigate();

    const { id, type } = useParams();

    useEffect(() => {
        if (id && type){
            const fetchPost = async () => {
                const response = await fetch(`http://localhost:80/api/${type}/${id}`);
                const data = await response.json();
                return (title.current.value = data.title, content.current.value = data.content, setImage(data.images[0]));
            }
            fetchPost();
        }
    }, []);

    const handleChange = (e) => {
        setImage(e.target.files[0]);
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("title", title.current.value);
        formData.append("content", content.current.value);
        formData.append("image", image);
        try {
            const resp = await axios.post(`http://localhost:80/api/${type}/${id}`, formData);
            console.log(resp.status === 200 ? "Thank you!" : "Error.");
            navigate("/");
        } catch (err) {
            console.log(err);
        }
      };
    
    const renderImage = () => {
        return(
            <img src={"http://localhost:80/storage" + image.url} alt='' style={{height: "50%",width: "50%",objectFit:"contain"}} className="m-0"/>
        );
    }
    
    return(
            <div className="testbox">
                <form onSubmit={handleClick}>
                    <div className="item">
                        <label for="title">Title<span>*</span></label>
                        <input id="title" type="text" ref={title} required/>
                    </div>
                    <div className="item">
                        <label for="content">Content<span>*</span></label>
                        <textarea rows="10" ref={content}></textarea>
                    </div>
                    { image.id ? renderImage() : null }
                    <div className="item">
                        <label for="image">Upload Picture</label>
                        <input  id="image" type="file" onChange={handleChange}/>
                    </div>
                    <div className="btn-block">
                        <button type="submit">SUBMIT</button>
                    </div>
                </form>
            </div>
    )
}