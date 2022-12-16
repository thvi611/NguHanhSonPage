import "./filter.css";
//import { Search} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {FaFilter} from "react-icons/fa"
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Filter({ username, page }) {
    const [tags, setTags] = useState([]);
    //const { user } = useContext(AuthContext);

    var currentPage = localStorage.getItem('currentPage');
    const fetchData = async () => {
        const response = await fetch(`https://f9db-117-2-255-218.ap.ngrok.io/api/category`, {
            method: "get",
            headers: new Headers({
              "ngrok-skip-browser-warning": "69420",
            }),
          });
        const data = await response.json();
        return setTags(data);
    }
    useEffect(() => {
        fetchData();
    }, [localStorage.getItem('currentPage')])
    return (
        <div className="filter-search">
            <div className="dropdown">
                <button className="dropbtn"><FaFilter/></button>
                <div className="dropdown-content">
                    {tags.map((tagObj) => {
                        if (localStorage.getItem('currentPage') === 'home') {
                            localStorage.setItem('currentPage','home');
                            return (<Link to="/feedPost/" state={{ tag: tagObj.id }} key={tagObj.id}>{tagObj.name}</Link>);
                        } else if(localStorage.getItem('currentPage') === 'guide') {
                            localStorage.setItem('currentPage','guide');
                            return (<Link to="/feedGuide/" state={{ tag: tagObj.id }} key={tagObj.id}>{tagObj.name}</Link>);
                        }else return null;
                    })}
                </div>
            </div>
        </div>
    )
}

