import "./filter.css";
//import { Search} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { AuthContext } from "../../context/AuthContext";
//const { user } = useContext(AuthContext);
//const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Filter({ username, page }) {
    const [tags, setTags] = useState([]);
    //const { user } = useContext(AuthContext);

    var currentPage = localStorage.getItem('currentPage');
    const fetchData = async () => {
        const response = await fetch(`http://localhost:8080/api/category`);
        const data = await response.json();
        return setTags(data);
    }
    // const fetchData = async () => {
    //     axios.get(`http://localhost:8080/api/category`)
    //         .then(res => {
    //             const data = res.data;
    //             setTags( data );
    //         })
    //         .catch(error => console.log(error));
    // }

    useEffect(() => {
        fetchData();
    }, [currentPage])
    return (
        <div className="filter-search">
            <div className="dropdown">
                <button className="dropbtn">Lọc bài viết</button>
                <div className="dropdown-content">
                    {tags.map((tagObj) => {
                        if (currentPage === 'home') {
                            localStorage.setItem('tag',tagObj.id);
                            return <Link to="/feedPost/" state={{ tag: tagObj.id }}>{tagObj.name}</Link>
                        } else {
                            localStorage.setItem('tag',tagObj.id);
                            return <Link to="/feedGuide/" state={{ tag: tagObj.id }}>{tagObj.name}</Link>
                        }
                    })}
                </div>
            </div>
        </div>
    )
}

