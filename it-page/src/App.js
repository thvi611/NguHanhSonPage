import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostDetail from './Page/PostDetail/PostDetail';
import CreatePost from './Page/CreatePost/CreatePost';
import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
import FeedPost from './components/feedPost/FeedPost';
import FeedGuide from './components/feedGuide/FeedGuide';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />}>
            <Route path="/feedPost" element={<FeedPost />} />
            <Route path="/feedGuide" element={<FeedGuide />} />
          </Route>
          {/* bỏ đường dẫn với component hoặc page tương ứng vào, t để ví dụ thôi */}
          {/* <Route path="/admin" element={<Admin/>}/> */}
          <Route path="/postDetail" element={<PostDetail/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
