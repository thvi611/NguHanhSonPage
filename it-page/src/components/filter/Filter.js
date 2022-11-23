import "./filter.css";
import { Search} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
const { user } = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Filter({username,page}){
    const [tags, setTags] = useState([]);
    const { user } = useContext(AuthContext);

    const fetchData = () => {
        return fetch(`http://localhost:8080/api/category`)
              .then((response) => response.json())
              .then((data) => setTags(data));
    }

    useEffect(() => {
        fetchData();
        const currentPage = localStorage.getItem('currentPage');
        if(currentPage=='home'){
            const filter = tags.map((tagObj) => (
                <Link to="/feedPost/" state={{ tag: tagObj.id }}>{tagObj.name}</Link>
            ));
        }else{
            const filter = tags.map((tagObj) => (
                <Link to="/feedGuide/" state={{ tag: tagObj.id }}>{tagObj.name}</Link>
            ));
        }
    },[tags])
    return(
        <div className="filter-search">
            <div class="dropdown">
                <button class="dropbtn">Lọc bài viết</button>
                <div class="dropdown-content">
                    {filter}
                </div>
            </div>
            <div class="search-container">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input
                        placeholder="Search for friend, post or video"
                        className="searchInput"
                    />
                </div>
            </div>
        </div>
    )
}

