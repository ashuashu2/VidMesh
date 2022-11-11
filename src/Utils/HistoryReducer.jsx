import React from 'react'

function HistoryReducer( HistoryState ,action){
    switch (action.type) {
        case "ADD_TO_HISTORY":
            return { ...HistoryState, History: [...HistoryState.History, { ...action.payload }] };
            
            case "REMOVE_FROM_HISTORY":
                return {
                  ...HistoryState,
                  History: HistoryState.History.filter((c) => c.id !== action.payload.id),
                };
        default:
            return HistoryState;
    }
}

export  {HistoryReducer}