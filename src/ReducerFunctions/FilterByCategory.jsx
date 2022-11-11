import React from 'react'

function FilterByCategory(videos,Category) {
  
    switch(Category){

        case "Coding":
        return videos.filter((videos) => videos.Category === "Coding");
  
      case "Crypto":
        return videos.filter(
          (videos) => videos.Category === "Crypto");

    case "Comedy":
    return videos.filter((videos) => videos.Category === "Comedy");
    
    case "Finance":
    return videos.filter((videos) => videos.Category === "Finance");

      default:
        return videos;
        



    }
}

export { FilterByCategory}