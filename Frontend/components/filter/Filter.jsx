import "./filter.css";
import { Search} from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
const { user } = useContext(AuthContext);
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Filter(){
    return(
        <div className="filter-search">
            <div class="dropdown">
                <button class="dropbtn">Lọc bài viết</button>
                <div class="dropdown-content">
                    <a href="#">Cảnh quan</a>
                    <a href="#">Lịch sử</a>
                    <a href="#">Văn hóa</a>
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

