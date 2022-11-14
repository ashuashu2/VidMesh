import React, { useState,useEffect } from "react";
import "../VideoPage/videoCard.css"
import {AiFillLike} from 'react-icons/ai';
import { toast } from 'react-toastify';


import { CgPlayListAdd } from 'react-icons/cg';
import { MdWatchLater } from 'react-icons/md';
import { useComments } from "../../context/commentsContext";
import { useWatchLater } from "../../context/WatchLaterContext";
import { useLikes } from "../../context/LikesContext";
import { useAuth } from "../../context/AuthContext";






export function VideoCard(video) {
const {commentList,handleCommentAdd,handleCommentInput,initialComments,commentText} = useComments()

const { WatchLaterState , WatchLaterDispatch} = useWatchLater()
const { LikesState , LikesDispatch} = useLikes()
const { isLoggedIn} = useAuth()



function AddtoLikesHandler(video){
  if(isLoggedIn){
    LikesDispatch({type: "ADD_TO_LIKES",payload: video,}); 
      toast.success("Added To Likes!")
  
  }
  else
  {
  toast.error(" please login  first!")
  
  }
  
  }

  function AddtoWatchLaterHandler(video){
    if(isLoggedIn){
      WatchLaterDispatch({type: "ADD_TO_WATCHLATER",payload: video,})  
            toast.success("Added To WatchLater!")
    
    }
    else
    {
    toast.error(" please login  first!")
    
    }
    
    }









return (
<div className="single-product-main-div">
  <div className="single-product-div">
    <div className="video-div"><embed className="video-src" src={video.src} type="" /></div>
    <h2>{video.description} </h2>
    <div className=" date-button-container">
      <div>
        <h3>{video.views} views / {video.date}</h3>
      </div>
      <div className="buttons-div2">


        <h1   onClick={() =>{ AddtoLikesHandler(video) }}  className="click-button">
          <AiFillLike />
        </h1>


        <h1  onClick={() =>{ AddtoWatchLaterHandler(video) }}   className="click-button">
          <MdWatchLater />
        </h1>


        <h1 className="click-button">
          <CgPlayListAdd />
        </h1>
      </div>

    </div>
    <hr />

    <div className=" subscriber-div">
      <div className=" subscriber1-div">
        <img className='thumbnails-pic' src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} />
      </div>
      <div className=" subscriber2-div">
        <h3>{video.title} </h3>
        <h5>{video.views}Subscribers</h5>
      </div>

    </div>
    <hr />

    <h1 className="comments-h1"> || comments</h1>
    <div className="input-div"><input className="comment-input" placeholder="Add a comment" type="text"
        onChange={handleCommentInput} value={commentText} />
      <button onClick={handleCommentAdd} className="comment-button">comment</button>

      <div>
        <ul>
          {commentList.map(({ id, comment }) => (
          <ul className="comment-list comments-middle-div">
            <img className="random-images" src="https://source.unsplash.com/user/c_v_r/50x50"></img>

            <li key={id} className="comments">{comment} </li>




          </ul>

          ))}
        </ul>
        <ul>
          <li className="initial-comments">{initialComments.map((initialComments)=>(
            <div className="comment-list comments-middle-div">
              <img className="random-images" src="https://source.unsplash.com/user/c_v_r/50x50"></img>
              <div></div>
              <div className="comments">{initialComments}</div>
            </div>

            )) }</li>
        </ul>

      </div>
    </div>






  </div>
</div>

);
}