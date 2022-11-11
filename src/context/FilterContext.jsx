import { createContext, useContext, useReducer } from "react";
import { FilterReducer } from "../Utils/FilterReducer";

const FilterContext = createContext()

const FilterProvider = ({children})=>{

    
    const [FilterState,FilterDispatch]=useReducer(FilterReducer ,{
    Category:"",
    Search:""
})


    return (<FilterContext.Provider value={{FilterState,FilterDispatch}} >
            {children}
            </FilterContext.Provider>
    )


}



const useFilter =()=> useContext(FilterContext)
export {FilterProvider,useFilter}