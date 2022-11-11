import React from 'react'

function FilterReducer(FilterState,action ) {
switch(action.type){
    
    case "ALL":
      return {
        Category :"",
        Search :""
     
      };


      case "CATEGORY":
          return{...FilterState,Category:action.payload} 

          case "SEARCH":
          return{...FilterState,Search:action.payload} 
    



    default:
        return FilterState

}
}

export { FilterReducer}