import React from 'react'

function LikesReducer( LikesState ,action){
    switch (action.type) {
        case "ADD_TO_LIKES":
            return { ...LikesState, Likes: [...LikesState.Likes, { ...action.payload }] };
            
            case "REMOVE_FROM_LIKES":
                return {
                  ...LikesState,
                  Likes: LikesState.Likes.filter((c) => c.id !== action.payload.id),
                };
        default:
            return LikesState;
    }
}


export  {LikesReducer}