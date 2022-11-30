import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
import FeedPost from './components/feedPost/FeedPost';
import FeedGuide from './components/feedGuide/FeedGuide';
import PostDetail from './pages/PostDetail/PostDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      // <Routes>
      //   {/* <Route path="/login" element={<Login />} /> */}
      //   <Route path="/" element={<Home />}>
      //     <Route path="feedPost" element={<FeedPost />} />
      //     <Route path="feedGuide" element={<FeedGuide />} />
      //   </Route>
      //   {/* bỏ đường dẫn với component hoặc page tương ứng vào, t để ví dụ thôi */}
      //   {/* <Route path="/admin" element={<Admin/>}/> */}
      // </Routes>
      <PostDetail></PostDetail>
    );
  }
}
export default App;
