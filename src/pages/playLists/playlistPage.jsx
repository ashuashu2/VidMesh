import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useHistory } from "../../context/HistoryContext";
import "../playLists/PlayList.css"

import { usePlaylist } from "../../context/PlayListContext";
const PlaylistPage = () => {
const { playlistId } = useParams();
const { playlists } = usePlaylist();
const playlistToRender = playlists.find((obj) => obj._id === playlistId);
console.log(playlistToRender);
const navigate = useNavigate();
const { HistoryDispatch} = useHistory()
return (
<div>
  <div className="playlist-page-container">
    {playlistId &&
    playlistToRender.videos.map((video) => (
    <div>
      <div className="playlist-page-div" key={video._id}>

        <div onClick={()=> {HistoryDispatch({type: "ADD_TO_HISTORY",payload: video,}
          )
          navigate(`/VideoDetail/${video._id}`) }}><img className="playlist-page-pic"
            src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} /> </div>


        <div className="playlist-page-title">{video.title}</div>
        <div className="playlist-page-description">
          { video.description }
        </div>
      </div>
    </div>
    ))}
  </div>

</div>
);
};

export default PlaylistPage;