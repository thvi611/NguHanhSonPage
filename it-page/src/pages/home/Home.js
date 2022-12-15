import Topbar from "../../components/topbar/Topbar";
import Filter from "../../components/filter/Filter";
import SlideBar from "../../components/slideBar/SlideBar";
import "./home.css"
import { Outlet } from "react-router-dom";

export default function Home() {
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