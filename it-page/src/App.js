import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import PostDetail from './Page/PostDetail/PostDetail';
import CreatePost from './Page/CreatePost/CreatePost';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import FeedPost from './components/feedPost/FeedPost';
import FeedPost from './components/feedGuide/FeedGuide';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />}>
          <Route path="feedPost" element={<FeedPost />} />
          <Route path="feedGuide" element={<FeedGuide />} />
        </Route>
        {/* bỏ đường dẫn với component hoặc page tương ứng vào, t để ví dụ thôi */}
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
