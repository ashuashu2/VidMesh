import React from 'react'

function FilterBySearch(videos,value) {
   
    
    if(value){
      return videos.filter(item => item.description.toLowerCase().includes(value) )
      }else{
          return videos
      }
  }

export { FilterBySearch}