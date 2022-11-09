import "./App.css";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import { VideoListing } from "./components/videosListing/VideoListing";
function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VideoListing" element={<VideoListing />} />
      </Routes>




    
    </div>
  );
}

export default App;
