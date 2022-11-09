import "../home/home.css"
import homebanner from  "../../images/homebanner.jpg"
import { Link } from "react-router-dom"

function Home(){
  



    return(
     <div className="home-main-div">
        <div className="home-right-div">
            <h1> <span className="welcome-text">W</span>elcome  <span className="welcome-text">T</span>o  <span className="welcome-text">V</span>id<span className="welcome-text">M</span>esh <span className="welcome-text">V</span>ideo</h1>
            <h3>Click Here To Explore </h3>
            <h3>All Collection Of Videos</h3>
            <Link to="/VideoListing"><button className="home-button">Explore Collection</button> </Link>
            
        </div>

        <div  className="home-left-div">
            <img className="home-banner" src={homebanner} alt="" />
          

        </div>
     </div>
    )
}
export {Home}