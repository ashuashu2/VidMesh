import "../home/home.css"
import homebanner from "../../images/homebanner.jpg"
import { Link } from "react-router-dom"

function Home(){




return(
<div className="home-main-div">
    


    <div className="home-explore-buttonSide-div">



        <div className="home-right-div">
            <div className="home-right-div2">
                <h1 className="welcome-text-containter"> <span className="welcome-text text1">W</span>elcome <span className="welcome-text">T</span>o <span
                        className="welcome-text">V</span>id<span className="welcome-text">M</span>esh <span
                        className="welcome-text">V</span>ideo</h1>
                <h3 className="click-here-text" >Click Here To Explore </h3>
                <h3 className="all-collection-text">All Collection Of Videos</h3>
                <Link to="/VideoListing"><button className="home-button">Explore Collection</button> </Link>
            </div>


        </div>

        <div className="home-left-div">
            <img className="home-banner" src={homebanner} alt="" />


        </div>
    </div>
</div>
)
}
export {Home}