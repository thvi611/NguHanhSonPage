import "./login.css";
import { useState } from "react";
import { TextField } from "@mui/material";


export default function Login() {
    const [mail, setMail] = useState("");
    const [pass, setPass] = useState("");
    const [message, setMessage] = useState("");

    async function loginUser() {
        let item = {email: mail, password: pass}
        console.log(mail,pass);
        const data = await fetch('http://localhost:80/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        return await data.json();
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const response = await loginUser();
        console.log(response);
        if (response.message === "Login successed!") {
            setMail("");
            setPass("");
            localStorage.setItem('isAdmin', true);
            window.location.href = "/";
        } else {
            setMessage("Some error occured");
        }
    }

    return (
        <div className="back">
            <form id="frm1" className="form-sub" noValidate onSubmit={handleSubmit}>
                <b>ADMIN LOGIN</b>
                <TextField
                    value={mail}
                    label="Enter your email"
                    style = {{width: 400,marginTop:30,marginBottom:30,marginLeft:"auto",marginRight:"auto"}}
                    onChange={(e) => {
                        setMail(e.target.value);
                    }}
                />
                <TextField
                    value={pass}
                    label="Enter your password"
                    type="password"
                    style = {{width: 400,marginBottom:30,marginLeft:"auto",marginRight:"auto"}}
                    onChange={(e) => {
                        setPass(e.target.value);
                    }}
                />
                <button className="bnt-log" type="submit">LOGIN</button>
                <div className="message">{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    )
}