import "./App.css";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import { VideoListing } from "./components/videosListing/VideoListing";
import { VideoDetail } from "./components/VideoPage/videoPage";
import { Footer } from "./components/footer/footer";
import { WatchLater } from "./pages/watchlater/WatchLater";
import { SideBar } from "./components/SideBar/SideBar";
function App() {
  return (
    <div className="App">
      <Navbar className="navbar"/>


      <div className="main-container">
      <div className="sideBar-home-div">
        <div>
            <SideBar />
        </div>
    </div>


        <div>  
          <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VideoListing" element={<VideoListing />} />
      <Route path="/VideoDetail/:videoId" element={<VideoDetail />} />
      <Route path="/WatchLater" element={<WatchLater />} />


      </Routes>
      </div>
       
       </div>
      
      <Footer />




   </div>
  );
}

export default App;
