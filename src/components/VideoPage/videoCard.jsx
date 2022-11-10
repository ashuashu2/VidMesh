import React, { useState,useEffect } from "react";
import "../VideoPage/videoCard.css"
import { v4 as uuid } from "uuid";
import {AiFillLike} from 'react-icons/ai';

import { CgPlayListAdd } from 'react-icons/cg';
import { MdWatchLater } from 'react-icons/md';
import { useComments } from "../../context/commentsContext";
import homebanner from  "../../images/homebanner.jpg"





export function VideoCard( {_id,
views,
date,
title,
src,
description,

}) {
  const {commentList,handleCommentAdd,handleCommentInput,initialComments,commentText} = useComments()
 







return (
<div>
  <div className="single-product-div">
    <div className="video-div"><embed className="video-src" src={src} type="" /></div>
    <h2>{description} </h2>
    <div className=" date-button-container">
      <div>
        <h3>{views} / {date}</h3>
      </div>
      <div className="buttons-div2">
        <h1 className="click-button">
          <AiFillLike />
        </h1>
        <h1 className="click-button">
          <MdWatchLater />
        </h1>
        <h1 className="click-button">
          <CgPlayListAdd />
        </h1>
      </div>

    </div>
    <hr />

    <div className=" subscriber-div">
      <div className=" subscriber1-div"><img className='thumbnails-pic'
          src={`https://i.ytimg.com/vi/${_id}/hqdefault.jpg`} /></div>
      <div className=" subscriber2-div">
        <h3>{title} </h3>
        <h5>{views}Subscribers</h5>
      </div>

    </div>
    <hr />

    <h1> || comments</h1>
    <div><input className="comment-input" placeholder="Add a comment" type="text" onChange={handleCommentInput}
        value={commentText} />
      <button onClick={handleCommentAdd} className="comment-button">comment</button>

      <div  >
        <ul  >
          {commentList.map(({ id, comment }) => (
          <ul className="comment-list comments-middle-div" >
            {/* <img  className="comment-banner" src={homebanner} alt="" /> */}
            <img src="https://via.placeholder.com/150"></img>

            <li className="comments">{comment} </li>
            
           


          </ul>

          ))}
        </ul>
        <ul >
        <li className="initial-comments">{initialComments.map((initialComments)=>(
          <div className="comment-list comments-middle-div"  >
            {/* <img  className="comment-banner" src={homebanner} alt="" /> */}
            <img src="https://source.unsplash.com/user/c_v_r/1900x800"></img>
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