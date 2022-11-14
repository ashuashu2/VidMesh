import { Link } from "react-router-dom"
import "../Error 404/ErrorRoute.css"

function Error404(){
    return(
        <div className="error-route-div" > 

       <h1 className="error-route-h1" >  <span  className="error-route-h1-span" >Opps!</span>  Page Not Found</h1>

       <p className="error-route-para" >You must have picked the wrong door because I haven't been able to lay my eye on the page you've been searching for.</p>
       <Link to="./" ><button className="error-route-button" > Back To Home </button> </Link>  
   </div>
    )
}
export {Error404}