import { createContext, useContext } from "react";
import axios from "axios";
import { useState ,useEffect} from "react";

const VideosContext = createContext()
const VideosProvider =({children})=>{

    const [videos,setVideos] = useState([])
    useEffect(() => {
        return (async function () {
          const response = await axios.get("/api/videos");
          setVideos(response.data.videos);
          
        })();
      }, []);
    return(
        <VideosContext.Provider value={{videos,setVideos}}>
            {children}
        </VideosContext.Provider>
    )
}
const useVideos =()=>useContext(VideosContext)
export{useVideos,VideosProvider}