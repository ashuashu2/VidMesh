import { createContext, useContext, useEffect, useReducer } from "react";
import { LikesReducer } from "../Utils/LikesReducer";

const LikesContext = createContext()

const LikesProvider = ({children}) =>{

    function getDataFromLocalStorage3(){
        const getData = localStorage.getItem("Likes")
        return getData ? JSON.parse(getData):[]
    }

    const [LikesState,LikesDispatch] = useReducer(LikesReducer ,{Likes:getDataFromLocalStorage3()})

    useEffect(() => {
        localStorage.setItem("Likes",JSON.stringify(LikesState.Likes))
      }, [LikesState])
      
      
      


    return (
        <LikesContext.Provider value={{LikesState,LikesDispatch}}>
            {children}
        </LikesContext.Provider>
    )
}
const useLikes = () => useContext(LikesContext)
 export {LikesProvider,useLikes};