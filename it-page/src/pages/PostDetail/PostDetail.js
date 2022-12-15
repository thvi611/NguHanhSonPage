import React, { Component } from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import './PostDetail.css';
import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Comment from "../../components/comment/Comment";
import { Link, useNavigate } from "react-router-dom";

export default function PostDetail() {
    const [post, setPost] = useState([]);
    const [comments, setComments] = useState([]);
    const [images, setImages] = useState([]);
    const name = useRef();
    const content = useRef();
    const navigate = useNavigate();

    const { id, type } = useParams();

    var Admin = false;
    if (localStorage.getItem('isAdmin')) {
        Admin = localStorage.getItem('isAdmin');
    }

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:80/api/${type}/${id}`);
            const data = await response.json();
            return (setPost(data), setComments(data.comments), setImages(data.images));
        }
        fetchPost();
    }, []);

    const renderPost = (post) => {
        if (post != null)
            return (
                <div id="content">
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                </div>
            );
        else
            return (
                <div></div>
            );
    }

    const handleClick = async (e) => {
        e.preventDefault();
        if (type === "post") {
            const comment = {
                name: name.current.value,
                content: content.current.value,
                post_id: id,
                image: '',
            };
            try {
                await axios.post("http://localhost:80/api/comment", comment);
            } catch (err) {
                console.log(err);
            }
        }
        else {
            const comment_guide = {
                name: name.current.value,
                content: content.current.value,
                guide_id: id,
                image: '',
            };
            try {
                await axios.post("http://localhost:80/api/comment", comment_guide);
            } catch (err) {
                console.log(err);
            }
        }
        name.current.value = "";
        content.current.value = "";
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:80/api/${type}/${id}`);
            const data = await response.json();
            return (setComments(data.comments));
        }
        fetchPost();
    };

    const renderImage = (image) => {
        if (image.url.includes("/images/"))
            return (
                <img src={"http://localhost:80/storage" + image.url} alt='' style={{ height: "50%", width: "100%", objectFit: "contain" }} className="m-0" />
            );
        else
            return (
                <img src={image.url} alt='' />
            );
    }

    const confirmDelete = async (e) => {
        e.preventDefault();
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => handleDeletePost()
                },
                {
                    label: 'No',
                }
            ]
        });
    }

    const handleDeletePost = async () => {
        try {
            await axios.delete(`http://localhost:80/api/post/${id}`);
            navigate("/");
        } catch (err) {
            console.log(err);
        }
    };


    return (
        <>
        <div id="back-img"></div>
        <div id="main">
            {Admin ? (
                <div className='d-flex justify-content-end' id="quanly">
                    <Link to={`/updatePost/${type}/${post.id}`} style={{ textDecoration: "none" }}>
                        <button className='btn btn-secondary update'><FaPencilAlt/></button>
                    </Link>
                    <button className='btn btn-danger m-0' onClick={confirmDelete}><FaTrashAlt/></button>
                </div>
            ) : (
                <div></div>
            )}
            <div id="post">
                <div className="d-flex justify-content-between">
                    {images.map((image) => (
                        renderImage(image)
                    ))}
                </div>
                {renderPost(post)}
            </div>
            <div id="comment">
                <div id="cmt-box" className='container-fluid'>
                    <form style={{ paddingTop: 30 }} onSubmit={handleClick}>
                        <div className="row">
                            <div className="form-group">
                                <label className='d-flex justify-content-start'>Họ và tên</label>
                                <input type="text" name="name" className="form-control" ref={name}></input>
                            </div>
                            {/* <button type="submit" className="btn btn-primary col-3" style={{height: 38, marginTop:24, width:160.5}}>Đăng nhập Google</button> */}
                        </div>
                        <div className="form-group mt-2">
                            <label className='d-flex justify-content-start'>Nội dung</label>
                            <textarea className="form-control" rows="3" ref={content}></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary d-flex justify-content-center mx-0" style={{ marginTop: 10, width: "max-content", height: "max-content" }}>Gửi</button>
                    </form>
                </div>
                <div id="cmt-box" className='container-fluid d-flex flex-column align-items-start'>
                    {comments.map((comment) => (
                        <Comment key={comment.id} comment={comment} state={setComments} type={type} id={id} admin={Admin} />
                    ))}
                </div>
            </div>
        </div></>
    );
}