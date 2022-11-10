import { useParams } from "react-router-dom"
import { useVideos } from "../../context/videosContext"
import { SideBar } from "../SideBar/SideBar"
import { VideoCard } from "./videoCard"
import "../VideoPage/videoCard.css"

function VideoDetail() {
    const {videos} =useVideos()
    const {videoId} = useParams()
    function findDeatils (videos,videoId){
        return videos.find((video)=>video._id===videoId)
    }
    const video = findDeatils(videos, videoId)
    

    return( 
        <div className="video2-listing-div">
            <div className="sideBar2-div"> <SideBar /> </div>
            <div className="videoStore2-div"><VideoCard {...video} /></div>
      
        </div>
    )
    
}
export {VideoDetail}