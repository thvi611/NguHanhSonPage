import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import PostDetail from './Page/PostDetail/PostDetail';
import CreatePost from './Page/CreatePost/CreatePost';

function main () {
  return (
      <div>
        <outlet/>

      </div>
  );
}
function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element={<main/>}>
            <Route path = "/login" element={<login/>}></Route>
            <Route path = "/sign-up" element={<signup/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
