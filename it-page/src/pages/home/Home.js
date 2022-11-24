import Topbar from "../../components/topbar/Topbar";
import Filter from "../../components/filter/Filter";
import "./home.css"
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Topbar />
      <Filter/>
      <div className="homeContainer">
        <Outlet/>
      </div>
    </>
  );
}