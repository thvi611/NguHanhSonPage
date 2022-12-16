import Topbar from "../../components/topbar/Topbar";
import Filter from "../../components/filter/Filter";
import SlideBar from "../../components/slideBar/SlideBar";
import "./home.css"
import { Outlet } from "react-router-dom";
import { useEffect} from "react";

export default function Home() {
  useEffect(() => {
    const fetchPost = async () => {
        const response = await fetch(`https://f9db-117-2-255-218.ap.ngrok.io/storage/`, {
            headers: new Headers({
              "ngrok-skip-browser-warning": "69420",
            }),
        });
        const data = await response.json();
        return;
    }
    fetchPost();
  }, []);

  return (
    <>
      <SlideBar/>
      <Filter/>
      <div id="back"></div>
      <div className="homeContainer">
        <Outlet/>
      </div>
      <Topbar />
    </>
  );
}