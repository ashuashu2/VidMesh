import "./App.css";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import { VideoListing } from "./components/videosListing/VideoListing";
import { VideoDetail } from "./components/VideoPage/videoPage";
import { Footer } from "./components/footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VideoListing" element={<VideoListing />} />
      <Route path="/VideoDetail/:videoId" element={<VideoDetail />} />

      </Routes>
      <Footer />




   </div>
  );
}

export default App;
