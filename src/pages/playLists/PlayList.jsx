import axios from "axios";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { usePlaylist } from "../../context/PlayListContext";
import PlaylistCard from "./playlistCard";
import "../playLists/PlayList.css"

const Playlist = () => {
const { playlists,SetPlayLists} = usePlaylist();
const { isLoggedIn: { token, login }, } = useAuth();
const header = { authorization: token };


const getData = async () => {
try {
const response = await axios.get("/api/user/playlists", {
headers: header,
});
SetPlayLists(response.data.playlists);

} catch (error) {
console.log(error);
toast.error(error)
}
};


   useEffect(() => {
    if (login) {
     getData();
 }
  }, []);


return (
<div>
  <div className="showing-result-text"> Showing Results: <small>{playlists.length}</small> </div>
  <div className="playlist-main-div">{
    playlists.length > 0 ? (playlists.map((playlist) =>
    <PlaylistCard playlist={playlist} />)) : (
    <img
      src="https://marketplace.canva.com/EAFI5_BPn_4/1/0/1600w/canva-black-and-white-groovy-keep-going-desktop-wallpaper-YNzgR1h3Qo0.jpg"
      className="empty-playlist-img"></img>
    )

    }
  </div>
</div>
);
};
export {Playlist}