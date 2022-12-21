import { useAuth } from "../../../context/AuthContext";
import { usePlaylist } from "../../../context/PlayListContext";
import "../Modal/Modal.css"
import { toast } from "react-toastify";
import axios from "axios";
import { useState } from "react";


function Modal({ setShowModal, video }) {
const [title, setTitle] = useState("");
const [description, setDescription] = useState("");

const { playlists , setPlayLists } = usePlaylist()
const { isLoggedIn : {token} } = useAuth() 
console.log(token)


const header = { authorization: token };


const createPlaylistHandler = async () => {
  const data = {
    title: title,
    description: description,
    img: video._id
  };
  try {
    console.log(data);
    const response = await axios.post(
      `/api/user/playlists`,
      { playlist: data },
      {
        headers: header,
      }
    );

    console.log(response);
    toast.success("Playlist Is Created");
    setPlayLists(response.data.playlists);
  } catch (error) {
    toast.error("Playlist Not Created");
  }
};


const addVideoToPlaylist = async (video, _id) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${_id}`,
      { video: video },
      {
        headers: header,
      }
    );
  
     
      setPlayLists(response.data.playlists);
      toast.success("Video added In Your Playlist");
    
  } catch (error) {
    toast.error(error);
  }
};



return(

<div className="modal-page-div">
  <div className="modalPage-image-div">
    <img className="modalPage-image" alt={video.title}
      src={`https://img.youtube.com/vi/${video._id}/maxresdefault.jpg`}></img></div>


  <div className="modalPage-left-div">


    <div>
      <div className="modal-input-div">
        <input className="modal-input" placeholder="Add Title To Your Playlist" onChange={(event)=>
        setTitle(event.target.value)}
        />
      </div>
      <div className="modal-input-div">
        <input className="modal-input" placeholder="Add Description To Your Playlist" onChange={(event)=>
        setDescription(event.target.value)}
        />
      </div>
      <div className="create-playlist-button-div">
        <button className="create-playlist-button" onClick={ ()=>createPlaylistHandler ()}>
          Create Playlist
        </button></div>
    </div>
    <div className="playlist__name__outer">
                        {playlists.length >= 0 &&
            playlists.map((playlist) => (<div className="playlist__name__box">
                <input
                  type="checkbox"
                  onChange={() => addVideoToPlaylist(video, playlist._id)}
                ></input>
                <label key={playlist._id} className="playlist_name">
                {playlist.title}
              </label>
              </div>))}</div>

    <div className="modalPage-close-button-div">
    
      <button className="modalPage-close-button" onClick={()=> setShowModal(false)}> Close </button>

    </div>





  </div>



</div>
)

}
export{Modal}