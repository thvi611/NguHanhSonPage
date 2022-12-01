import React from 'react';
import axios from "axios";
import { useRef, useEffect, useState } from "react";
import './CreatePost.css';

export default function CreatePost() {
    const [category, setCategory] = useState([]);
    
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch(`http://localhost:80/api/category`);
            const data = await response.json();
            return (setCategory(data));
        }
        fetchCategory();
    });
    
    return(
            <div className="testbox">
                <form action="/">
                    <div className="item">
                        <label for="title">Title<span>*</span></label>
                        <input id="title" type="text" name="title" required/>
                    </div>
                    <div className="item">
                        <label for="content">Content<span>*</span></label>
                        <textarea rows="10"></textarea>
                    </div>
                    <div className="item">
                        <label for="title">Category<span>*</span></label>
                        <select required>
                            {category.map((category) => (
                                <option value={category.id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="item">
                        <label for="video">Upload Picture</label>
                        <input  id="video" type="file" multiple/>
                    </div>
                    <div className="btn-block">
                        <button type="submit" href="/">SUBMIT</button>
                    </div>
                </form>
            </div>
    )
}