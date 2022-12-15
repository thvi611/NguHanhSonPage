import "./topbar.css";
//import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
//import { useContext } from "react";
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Topbar() {
    var Admin = false;
    if (localStorage.getItem('isAdmin')) {
        Admin = localStorage.getItem('isAdmin');
    }
    const clickHome = () => {
        localStorage.setItem('currentPage', 'home');
    };
    const clickGuide = () => {
        localStorage.setItem('currentPage', 'guide');
    };
    const Logout = () =>{
        localStorage.clear();
        window.location.href = '/';
    }
    return (
        <div className="topbarContainer">
            <div className="home but">
                <Link to={`/feedPost/`} onClick={clickHome} style={{ textDecoration: "none" }}>
                    <span className="home" style={{ marginLeft: 40 }}>Home</span>
                </Link>
            </div>
            <div className="advice but">
                <Link to={`/feedGuide/`} onClick={clickGuide} style={{ textDecoration: "none" }}>
                    <span className="guide" style={{ marginLeft: 40 }}>Hướng dẫn</span>
                </Link>
            </div>
            {Admin ? (
                <>
                    <div className="admin_page left new_post">
                        <Link to={`/createPost/`} style={{ textDecoration: "none" }}>
                            <button type="button" className="btn btn-primary" style={{ backgroundColor: 'rgb(29, 188, 250)', width: 40, height: 40, marginTop: 10, marginLeft: 30 }}>
                                <FaPlus/>
                            </button>
                        </Link>
                    </div>
                    <div className="logout but">
                        <Link to={`/login/`} onClick={Logout} style={{ textDecoration: "none" }}>
                            <span className="logout" style={{ marginLeft: 30 }}>Logout</span>
                        </Link>
                    </div>
                </>
            ) : (
                <div className="logout but">
                    
                </div>
            )}
        </div>
    )
}