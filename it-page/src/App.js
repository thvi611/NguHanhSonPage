import logo from './logo.svg';
import './App.css';
import React from 'react';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import PostDetail from './Page/PostDetail/PostDetail';
import CreatePost from './Page/CreatePost/CreatePost';
>>>>>>> 8995943be546bb7f9f7ee6518454477f417dabb1
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
<<<<<<< HEAD
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
=======
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
      </BrowserRouter>
>>>>>>> 8995943be546bb7f9f7ee6518454477f417dabb1
    );
  }
}
export default App;
