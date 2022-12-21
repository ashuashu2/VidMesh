import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { usePlaylist } from "../../context/PlayListContext";
import { useAuth } from "../../context/AuthContext";
import "../playLists/PlayList.css"



const PlaylistCard = ({ playlist }) => {
  const { setPlayLists } = usePlaylist();
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();


  
  const deletePlaylistHandler = async (id) => {
    const header = { authorization: isLoggedIn.token };
    try {
      const response = await axios.delete("/api/user/playlists/" + id, {
        headers: header,
      });
      console.log(response);
      setPlayLists(response.data.playlists);
      toast.success("Deleted Successfully");
    } catch (err) {
      toast.error("Not Deleted");
      console.log(err)
    }
  };
  return (
    <div key={playlist._id} className="playlist-card">
      <div className="playlistcard-skin">
        <img
          className="playlistcard-img"
          onClick={() => navigate(`/playlist/${playlist._id}`)}
          src="https://play-lh.googleusercontent.com/7EFNz7JQCgH8GDfDUSlLceR-3BLSVEqZtSsQgR3tUYaPxATsFdnjuPwkm9yPXpHBujso=w240-h480-rw"
        ></img>
        <AiFillDelete
          id="delete-icon"
          onClick={() => deletePlaylistHandler(playlist._id)}
        ></AiFillDelete>
        <div className="playlistcard-typo">
        
          <p style={{ fontSize: "1.5rem", width: "100%" }}>
            Title: {playlist.title}
          </p>
          <p
            style={{
              fontSize: "1.5rem",
              width: "100%",
            }}
          >
            Description:{" "}
            <span style={{ fontSize: "1rem" }}>{playlist.description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlaylistCard;
