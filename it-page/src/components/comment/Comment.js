import "./comment.css";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState} from "react";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

import axios from "axios";
import {FaTimes} from "react-icons/fa"
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

export default function Comment({comment, state, type, id, admin}){
    const confirmDelete = async (e) => {
        e.preventDefault();
        confirmAlert({
          title: 'Confirm to delete',
          message: 'Are you sure to do this.',
          buttons: [
            {
              label: 'Yes',
              onClick: () => handleDelete()
            },
            {
              label: 'No',
            }
          ]
        });
    }

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:80/api/comment/${comment.id}`);
        } catch (err) {
            console.log(err);
        }
        const fetchPost = async () => {
            const response = await fetch(`http://localhost:80/api/${type}/${id}`);
            const data = await response.json();
            return (state(data.comments));
        }
        fetchPost();
    }

    return(
        <div className="cmt">
            <div className="nd">
                <div className="name d-flex justify-content-between">
                    <p>{comment.name}</p>
                    {admin ? (
                        <button className='btn delete m-0' onClick={confirmDelete}><FaTimes/></button>
                    ) : (
                        <div></div>
                    )}
                </div>
                <p className="cmt-content d-flex justify-content-start">{comment.content}</p>
            </div>
        </div>
    );
}