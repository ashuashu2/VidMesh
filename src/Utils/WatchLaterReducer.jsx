import React from 'react'

function WatchLaterReducer( WatchLaterState ,action){
    switch (action.type) {
        case "ADD_TO_WATCHLATER":
            return { ...WatchLaterState, WatchLater: [...WatchLaterState.WatchLater, { ...action.payload }] };
            
            case "REMOVE_FROM_WATCHLATER":
                return {
                  ...WatchLaterState,
                  WatchLater: WatchLaterState.WatchLater.filter((c) => c.id !== action.payload.id),
                };
        default:
            return WatchLaterState;
    }
}

export  {WatchLaterReducer}