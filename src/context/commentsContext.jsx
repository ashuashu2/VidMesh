import { createContext,useState,useEffect,useContext } from "react";
import { v4 as uuid } from "uuid";


const CommentContext = createContext()

const CommentProvider=({children})=>{



const initialComments = [
"Very well-researched and fine-made video this is.",
"I truly love your channel. Keep doing the best work. ",
"Love this video, I think I’ve watched it four times. ",
]


function getDataFromLocalStorage1(){
const getData = localStorage.getItem("comments")
return getData ? JSON.parse(getData):[]
}

const [commentText, setCommentText] = useState("");
const [commentList, setCommentList] = useState(getDataFromLocalStorage1());

useEffect(() => {
localStorage.setItem("comments",JSON.stringify(commentList))
}, [commentList])


const handleCommentAdd = () => {
    if(commentText.length >= 1){
        setCommentList((list) => list.concat({ id: uuid(), comment: commentText }).reverse());
setCommentText("");

    }
    else{

    }

};

const handleCommentInput = (event) => setCommentText(event.target.value);


return(
<CommentContext.Provider value={{commentList,handleCommentAdd,handleCommentInput,initialComments,commentText}}>
    {children}
</CommentContext.Provider>
)
}
const useComments =()=>useContext(CommentContext)
export{useComments,CommentProvider}