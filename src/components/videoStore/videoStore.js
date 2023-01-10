import React, { useEffect } from 'react'
import { GoVerified } from 'react-icons/go';




import "../videoStore/videoStore.css"
import { useVideos } from "../../context/videosContext"
import { Link } from 'react-router-dom';
import { useHistory } from '../../context/HistoryContext';
import { useLikes } from '../../context/LikesContext';
import { useFilter } from '../../context/FilterContext';
import { FilterByCategory } from '../../ReducerFunctions/FilterByCategory';
import { FilterBySearch } from '../../ReducerFunctions/FilterBySearch';
import { FilterBySortBy } from '../../ReducerFunctions/FilterBySortBy';

function VideoStore() {




  const {videos} = useVideos()
  const { HistoryState , HistoryDispatch} = useHistory()
  const {LikesDispatch} = useLikes()
  const {FilterState,FilterDispatch}= useFilter()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  const  FilterVideosByCategory = FilterByCategory(videos,FilterState.Category)
  const FilterVideosBySearch = FilterBySearch(FilterVideosByCategory,FilterState.Search)
  const FilterVideosBySortBy = FilterBySortBy(FilterVideosBySearch,FilterState.SortBy)
  const FinalFilterVideos = FilterVideosBySortBy


  


  


  return (
  <div className='videostore-main-div'>
    <div className="search-div2">

<input placeholder=" 🔍       Search your Videos" onChange={(event)=>
FilterDispatch({type:"SEARCH",payload:event.target.value}) } className="nav-search2" type="text" />

</div>

    <div className="header-button-div"> 
      <div className='left-side-buttons-div'>
        <button onClick={()=>FilterDispatch({type:"ALL"}) }className='header-buttons'>All</button>
        <button   onClick={()=>FilterDispatch({type:"CATEGORY",payload:"Coding"}) } checked={FilterState.Category==="Coding"} className='header-buttons'>Coding</button>
        <button onClick={()=>FilterDispatch({type:"CATEGORY",payload:"Crypto"}) } checked={FilterState.Category==="Crypto"} className='header-buttons'>Crypto</button>
        <button onClick={()=>FilterDispatch({type:"CATEGORY",payload:"Finance"}) } checked={FilterState.Category==="Finance"} className='header-buttons'>Finance</button>
        <button onClick={()=>FilterDispatch({type:"CATEGORY",payload:"Comedy"}) } checked={FilterState.Category==="Comedy"} className='header-buttons'>Comedy</button>


      </div>
      <p className='showing-result-para'> Showing Results: {FinalFilterVideos.length} </p>

     


      <div className='right-side-buttons-div'>
      <button onClick={()=>FilterDispatch({type:"SORTBY",payload:"LATEST_FIRST"}) } className='header-buttons'>Latest first</button>
      <button onClick={()=>FilterDispatch({type:"SORTBY",payload:"OLDEST_FIRST"}) } className='header-buttons'>Oldest first</button>


      </div>


    </div>
    
    



    <div className='videos-container'>
   


      {
        FinalFilterVideos.map((video)=>(
          <div className='content-div' >
            <Link  onClick={()=> HistoryDispatch({type: "ADD_TO_HISTORY",payload: video,})}  to={`/VideoDetail/${video._id}`}><img   className='thumbnail-pic' src={`https://i.ytimg.com/vi/${video._id}/hqdefault.jpg`} /> </Link>
            
        
        
        <div  className="content2-div">
          <p className='video-description'  >{video.description}</p>
          <div className='content3-div'>
            
            <small>{video.title} <span><GoVerified /></span></small>
            <div  ><small>{`${video.views}views `}    /   {video.date}</small></div>
            </div>
            
            
            </div>
        
            

          
          </div>
          
        ))
      }

    </div>
    
    
    

    </div>
  )
}

export  {VideoStore}