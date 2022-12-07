import React, { Component } from 'react';
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import './PostDetail.css';

export default function PostDetail() {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [images, setImages] = useState([]);
    const name = useRef();
    const content = useRef();

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:80/api/post/24`);
            const data = await response.json();
            return (setPost(data), setComments(data.comments), setImages(data.images));
        }
        fetchPost();
    });

    const renderPost = (post) => {
        if (post != null)
            return(
                <div id="content">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            );
        else
            return(
                <div></div>
            );
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const comment = {
            name: name.current.value,
            content: content.current.value,
            post_id: 1,
            image: '',
        };
        try {
            await axios.post("http://localhost:80/api/comment", comment);
        } catch (err) {
            console.log(err);
        }
        name.current.value = "";
        content.current.value = "";
      };
    
    return(
            <div id="main">
                <div id="post">
                    <div className="d-flex justify-content-between">
                        {images.map((image) => (
                            <img src={image.url} alt=''/>
                        ))}
                    </div>
                    {renderPost(post)}
                </div>
                <div id="comment">
                    <div id="cmt-box" className='container-fluid'>
                        <form style={{paddingTop: 30}} onSubmit={handleClick}>
                                <div className="row">
                                    <div className="form-group col-9">
                                        <label className='d-flex justify-content-start'>Họ và tên</label>
                                        <input type="text" name="name" className="form-control" ref={name}></input>
                                    </div>
                                    <button type="submit" className="btn btn-primary col-3" style={{height: 38, marginTop:24, width:160.5}}>Đăng nhập Google</button>
                                </div>
                                <div className="form-group mt-2">
                                    <label className='d-flex justify-content-start'>Nội dung</label>
                                    <textarea className="form-control" rows="3" ref={content}></textarea>
                                </div>
                                
                                <button type="submit" className="btn btn-primary d-flex justify-content-start" style={{marginTop: 10}}>Gửi</button>
                        </form>
                    </div>
                    <div id="cmt-box" className='container-fluid d-flex flex-column align-items-start'>
                        {comments.map((comment) => (
                            <div className="cmt">
                                <div className="nd">
                                    <p className="name d-flex justify-content-start">{comment.name}</p>
                                    <p className="cmt-content d-flex justify-content-start">{comment.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
}