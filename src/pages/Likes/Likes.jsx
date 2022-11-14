import React from 'react'
import "../Likes/Likes.css"
import { useLikes } from '../../context/LikesContext'
import { useHistory } from '../../context/HistoryContext'
import { GoVerified } from 'react-icons/go';
import { AiFillDelete} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


function Likes() {
  

  const { LikesState : { Likes }} = useLikes()
  const {LikesDispatch} = useLikes()
  const {  HistoryDispatch} = useHistory()


  function RemoveFromLikesHandler(video){
   
    LikesDispatch({type: "REMOVE_FROM_LIKES",payload: video,})    
    toast.success(" Video Removed  From Likes !")
  
  }


  return (
    
    <div>
      <div> Showing Results: <small>{Likes.length}</small> </div>

    <div className='Likes-video-div'> { Likes.map((video)=>(
      <div className='Likes-video-div2'> 
        <div>
        <Link  className='Likes-video-image' onClick={()=> HistoryDispatch({type: "ADD_TO_HISTORY",payload: video,})}  to={`/VideoDetail/${video._id}`}><img   className='Likes-video-image' src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} /> </Link>
        </div>


        <div className='Likes-video-content'>
        <p className='video-description'  >{video.description}</p>
        <small>{video.title} <span><GoVerified /></span></small>
        <div ><small>{`${video.views}views `}    /   {video.date}</small></div>
        <div onClick={() =>{ RemoveFromLikesHandler(video) }}  className='delete-icon'> <AiFillDelete /> </div>



           </div>
           
        
        
        </div>
        

    )) } 

    </div>
   
  </div>
)
}

export { Likes}