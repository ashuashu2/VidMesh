import React, { useState,useEffect } from "react";
import "../VideoPage/videoCard.css"
import {AiFillLike ,AiFillDislike} from 'react-icons/ai';
import { toast } from 'react-toastify';


import { CgPlayListAdd } from 'react-icons/cg';
import { MdWatchLater,MdOutlineWatchLater } from 'react-icons/md';
import { useComments } from "../../context/commentsContext";
import { useWatchLater } from "../../context/WatchLaterContext";
import { useLikes } from "../../context/LikesContext";
import { useAuth } from "../../context/AuthContext";
import { Modal } from "../../pages/playLists/Modal/Modal";
import { useNavigate } from "react-router-dom";






export function VideoCard(video) {

const [ showModal ,setShowModal ] = useState(false)
const {navigate } = useNavigate()
const {commentList,handleCommentAdd,handleCommentInput,initialComments,commentText} = useComments()

const { WatchLaterState , WatchLaterDispatch} = useWatchLater()
const { LikesState , LikesDispatch} = useLikes()
const { isLoggedIn} = useAuth()
useEffect(() => {
  window.scrollTo(0, 0)
}, [])



function AddtoLikesHandler(video){
if(isLoggedIn.login){
LikesDispatch({type: "ADD_TO_LIKES",payload: video,});
toast.success("Added To Likes!")

}
else
{
toast.error(" please login first!")

}

}

function RemoveFromLikesHandler(video){

LikesDispatch({type: "REMOVE_FROM_LIKES",payload: video,})
toast.success(" Video Removed From Likes !")

}

function AddtoWatchLaterHandler(video){
if(isLoggedIn.login){
WatchLaterDispatch({type: "ADD_TO_WATCHLATER",payload: video,})
toast.success("Added To WatchLater!")

}
else
{
toast.error(" please login first!")

}

}

function RemoveFromWatchLaterHandler(video){

WatchLaterDispatch({type: "REMOVE_FROM_WATCHLATER",payload: video,})
toast.success(" Video Removed From WatchLater !")

}
const playListClickHandler = () =>{
  if(isLoggedIn.login){
    setShowModal(true) 
  } else{
    toast.error ("please Login First")
  }

}









return (
<>
  {showModal &&
  <Modal className="modal" setShowModal={setShowModal} video={video} />}

  <div className="single-product-main-div">
    <div className="single-product-div">
      <div className="video-div"><embed className="video-src" src={video.src} type="" /></div>
      <h2 className="video-des">{video.description} </h2>
      <div className=" date-button-container">
        <div>
          <h3 className="video-date-and-views">{video.views} views / {video.date}</h3>
        </div>
        <div className="buttons-div2">


          <div> {LikesState.Likes.some((p)=>p.id === video.id)?( <h1 onClick={()=>{ RemoveFromLikesHandler(video) }}
              className="click-button">
              <AiFillDislike />
            </h1>):(<h1 onClick={()=>{ AddtoLikesHandler(video) }} className="click-button">
              <AiFillLike />
            </h1>)} </div>


          <div> {WatchLaterState.WatchLater.some((p)=>p.id === video.id)?( <h1 onClick={()=>{
              RemoveFromWatchLaterHandler(video) }} className="click-button">
              <MdWatchLater />
            </h1>):( <h1 onClick={()=>{ AddtoWatchLaterHandler(video) }} className="click-button">
              <MdOutlineWatchLater />
            </h1>)} </div>





          <h1 onClick={playListClickHandler}
            className="click-button">
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
</>

);
}