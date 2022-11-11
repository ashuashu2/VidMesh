import "./App.css";
import { Home } from "./components/home/Home";
import { Navbar } from "./components/navbar/Navbar"
import {Route, Routes} from "react-router-dom"
import { VideoListing } from "./components/videosListing/VideoListing";
import { VideoDetail } from "./components/VideoPage/videoPage";
import { Footer } from "./components/footer/footer";
import { WatchLater } from "./pages/watchlater/WatchLater";
import { SideBar } from "./components/SideBar/SideBar";
import { History } from "./pages/History/History";
import { Likes } from "./pages/Likes/Likes";
import { Login } from "./pages/Authentication/Login";
import { Signup } from "./pages/Authentication/Signup";
import { PlayList } from "./pages/playLists/PlayList";
import { useLikes } from "./context/LikesContext";
import { useHistory } from "./context/HistoryContext";
function App() {

  // const {LikesState} = useLikes()
  // const {HistoryState} = useHistory()

  // console.log(LikesState.Likes.length)
  // console.log(HistoryState.History.length)

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
      <Route path="/History" element={<History />} />
      <Route path="/Likes" element={<Likes />} />
      <Route path="/PlayList" element={<PlayList /> } />
      <Route path="/Login" element={<Login /> } />
      <Route path="/Signup" element={<Signup /> } />




      </Routes>
      </div>
       
       </div>
      
      <Footer />




   </div>
  );
}

export default App;
