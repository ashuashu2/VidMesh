import React from 'react'

function FilterBySortBy(videoes,SortBy) {
    switch(SortBy){

        case "LATEST_FIRST":
            return videoes.sort((a,b) => new Date (b.date)- new Date (a.date))

            case "OLDEST_FIRST":
            return videoes.sort((a,b) =>  new Date (a.date)-new Date (b.date))

            default:
         return videoes
    }
    

}

export  {FilterBySortBy}