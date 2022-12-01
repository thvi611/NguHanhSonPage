import React from 'react';
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import './CreatePost.css';

export default function CreatePost() {
    const [categories, setCategories] = useState([]);
    const title = useRef();
    const content = useRef();
    const category = useRef();
    const image = useRef();
    
    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch(`http://localhost:80/api/category`);
            const data = await response.json();
            return (setCategories(data));
        }
        fetchCategories();
    });

    const handleClick = async (e) => {
       
      };
    
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
                    <div className="item">
                        <label for="title">Category<span>*</span></label>
                        <select required ref={category}>
                            {categories.map((category) => (
                                <option value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="item">
                        <label for="video">Upload Picture</label>
                        <input  id="video" type="file" multiple="false" ref={image}/>
                    </div>
                    <div className="btn-block">
                        <button type="submit" href="/">SUBMIT</button>
                    </div>
                </form>
            </div>
    )
}