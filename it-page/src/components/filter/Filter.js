import "./filter.css";
//import { Search} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Filter({username,page}){
    const [tags, setTags] = useState([]);
    //const { user } = useContext(AuthContext);
    const [currentPage,setCurrentPage] = useState([]);

    const fetchData = async () => {
        const response = await fetch(`http://localhost:8080/api/category`);
        const data = await response.json();
        return setTags(data);
    }

    useEffect(() => {
        fetchData();
        setCurrentPage(localStorage.getItem('currentPage'));
    },[tags])
    return(
        <div className="filter-search">
            <div class="dropdown">
                <button class="dropbtn">Lọc bài viết</button>
                <div class="dropdown-content">
                    {tags.map((tagObj) =>{
                        if(currentPage==='home'){
                            return <Link to="/feedPost/" state={{ tag: tagObj.id }}>{tagObj.name}</Link>
                        }else{
                            return <Link to="/feedGuide/" state={{ tag: tagObj.id }}>{tagObj.name}</Link>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

