import "./topbar.css";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Topbar(){
    const clickHome = () =>{
        localStorage.setItem('currentPage','home');
    };
    const clickGuide = () =>{
        localStorage.setItem('currentPage','guide');
    };
    return (
        <div className="topbarContainer">
            <div className="home but">
                <Link to={`/feedPost/`} onClick={clickHome} style={{ textDecoration: "none" }}>
                    <span className="home" style={{marginLeft:40}}>Home</span>
                </Link>
            </div>
            <div className="advice but">
                <Link to={`/feedGuide/`} onClick={clickGuide} style={{ textDecoration: "none" }}>
                    <span className="guide" style={{marginLeft:40}}>Hướng dẫn</span>
                </Link>
            </div>
            <div className="admin_page but left">
                <Link to={`/admin/`} style={{ textDecoration: "none" }}>
                    <span className="adminPage" style={{marginLeft:30}}>Quản lý</span>
                </Link>
            </div>
            <div className="new_post">
                <Link to={`/addPost/`} style={{ textDecoration: "none" }}>
                    <button type="button" class="btn btn-primary" style={{backgroundColor:'rgb(29, 188, 250)',width:40,height:40,marginTop:10,marginLeft:20}}>
                        +
                    </button>
                </Link>
            </div>
            <div className="logout but">
                <Link to={`/login/`} style={{ textDecoration: "none" }}>
                    <span className="logout" style={{marginLeft:30}}>Logout</span>
                </Link>
            </div>
        </div>
    )
}