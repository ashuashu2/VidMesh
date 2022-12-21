import { useState } from "react";
import { createContext, useContext} from "react";

const PlaylistContext = createContext()

const PlaylistProvider = ({children}) =>{

 

    const [playlists , SetPlayLists] = useState([])
     return (
        <PlaylistContext.Provider value={{playlists , SetPlayLists}}>
            {children}
        </PlaylistContext.Provider>
    )
}
const usePlaylist = () => useContext(PlaylistContext)
 export {PlaylistProvider,usePlaylist};