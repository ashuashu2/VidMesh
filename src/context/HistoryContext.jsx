import { createContext, useContext, useEffect, useReducer } from "react";
import { HistoryReducer } from "../Utils/HistoryReducer";

const HistoryContext = createContext()

const HistoryProvider = ({children}) =>{

    function getDataFromLocalStorage2(){
        const getData = localStorage.getItem("History")
        return getData ? JSON.parse(getData):[]
    }

    const [HistoryState,HistoryDispatch] = useReducer(HistoryReducer ,{History:getDataFromLocalStorage2()})

    useEffect(() => {
        localStorage.setItem("History",JSON.stringify(HistoryState.History))
      }, [HistoryState])
      
      
      


    return (
        <HistoryContext.Provider value={{HistoryState,HistoryDispatch}}>
            {children}
        </HistoryContext.Provider>
    )
}
const useHistory = () => useContext(HistoryContext)
 export {HistoryProvider,useHistory};