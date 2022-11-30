import './App.css';
import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import PostDetail from './Page/PostDetail/PostDetail';
import SlideBar from './components/slideBar/SlideBar';
import CreatePost from './Page/CreatePost/CreatePost';
import Home from "./pages/home/Home";
//import Login from "./pages/login/Login";
import FeedPost from './components/feedPost/FeedPost';
import FeedGuide from './components/feedGuide/FeedGuide';
import PostDetail from './pages/PostDetail/PostDetail';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Home />}>
            <Route
              path="/"
              element={<Navigate to="/feedPost" replace />}
            />
            <Route path="/feedPost" element={<FeedPost />} />
            <Route path="/feedGuide" element={<FeedGuide />} />
          </Route>
          {/* bỏ đường dẫn với component hoặc page tương ứng vào, t để ví dụ thôi */}
          {/* <Route path="/admin" element={<Admin/>}/> */}
          <Route path="/postDetail" element={<PostDetail />}></Route>
        </Routes>
        <PostDetail></PostDetail>
      </BrowserRouter>
    );
  }
}
export default App;
