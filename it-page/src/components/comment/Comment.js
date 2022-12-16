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
            await axios.delete(`https://f9db-117-2-255-218.ap.ngrok.io/api/comment/${comment.id}`, {
                method: "delete",
                headers: new Headers({
                  "ngrok-skip-browser-warning": "69420",
                }),
            });
        } catch (err) {
            console.log(err);
        }
        const fetchPost = async () => {
            const response = await fetch(`https://f9db-117-2-255-218.ap.ngrok.io/api/${type}/${id}`, {
                method: "get",
                headers: new Headers({
                  "ngrok-skip-browser-warning": "69420",
                }),
            });
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