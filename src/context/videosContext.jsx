import { createContext, useContext } from "react";
import axios from "axios";
import { useState ,useEffect} from "react";

const VideosContext = createContext()
const VideosProvider =({children})=>{

    const [home,setHome] = useState([])
    useEffect(() => {
        return (async function () {
          const response = await axios.get("/api/videos");
          setHome(response.data.videos);
          
        })();
      }, []);
    return(
        <VideosContext.Provider value={{home,setHome}}>
            {children}
        </VideosContext.Provider>
    )
}
const useVideos =()=>useContext(VideosContext)
export{useVideos,VideosProvider}