import "./App.css";
import { Home } from "./components/home/Home";
import { Navbar, useHamburgerHandler } from "./components/navbar/Navbar"
import {Route, Routes, useLocation} from "react-router-dom"
import { VideoListing } from "./components/videosListing/VideoListing";
import { VideoDetail } from "./components/VideoPage/videoPage";
import { Footer } from "./components/footer/footer";
import { WatchLater } from "./pages/watchlater/WatchLater";
import { SideBar } from "./components/SideBar/SideBar";
import { History } from "./pages/History/History";
import { Likes } from "./pages/Likes/Likes";

import { Playlist}  from "./pages/playLists/PlayList";
import 'react-toastify/dist/ReactToastify.css';
import { Login} from "./pages/Authentication/Login"
import {Signup } from "./pages/Authentication/Signup"
import {RequiresAuth} from "./pages/Authentication/RequireAuth"

import { Error404 } from "./pages/Error 404/ErrorRoute";
import { ToastContainer } from "react-toastify";

import { Modal } from "./pages/playLists/Modal/Modal";
import { useAuth } from "./context/AuthContext";
import { usePlaylist } from "./context/PlayListContext";
import PlaylistPage from "./pages/playLists/playlistPage";
import { useHamburger } from "./context/HamburgerContext";


function App() {
  const {isMobile } = useHamburger()

 return (
    <div className="App">

      <div  className="navbar"> <Navbar /> </div>
      <div className="main-container">
      <div className={isMobile ?  "sideBar-home-div2" : "sideBar-home-div"}>

       
            <SideBar  />
       
    </div>


        <div className="routes-div">  
           <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/VideoListing" element={<VideoListing />} />
      <Route path="/VideoDetail/:videoId" element={<VideoDetail />} />
      <Route path="/WatchLater" element={ <RequiresAuth> {<WatchLater /> } </RequiresAuth>  } />
      <Route path="/History" element={ <RequiresAuth> {<History />  } </RequiresAuth>   } />
      <Route path="/Likes" element={<RequiresAuth> {<Likes />  } </RequiresAuth>  } />
      <Route path="/Playlist" element={  <RequiresAuth> {<Playlist />  } </RequiresAuth>  } />
      <Route path="/Login" element={<Login /> } />
      <Route path="/Signup" element={<Signup /> } />
      <Route path="*" element={<Error404 /> } />
      <Route path="modal" element={<Modal />} />
      <Route path="/playlist/:playlistId" element={<PlaylistPage />} />

   







      </Routes>
      </div>
       
       </div>
      <div className="footerss-div"> <Footer  /> </div>
      
      <ToastContainer position="top-center" autoClose={2500} hideProgressBar={false} newestOnTop={false} closeOnClick
    rtl={false} pauseOnFocusLoss draggable pauseOnHover />      
      

   
      




   </div>
   
  );
}

export default App;
