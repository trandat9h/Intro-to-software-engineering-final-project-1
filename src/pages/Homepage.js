import HomepageHeader from "../components/homepage/HomepageHeader"
import RecommendedHotelWrapper from "../components/homepage/RecommendHotelWrapper"
import FamousCity from '../components/homepage/FamousCity'
import RecommendedTag from '../components/homepage/RecommendedTag'

function Homepage() {
    return(
        <div>
            <HomepageHeader />
            <FamousCity />
            <RecommendedTag/>
            <div className="w-full max-w-3/4 md:max-w-5/6 mx-auto">
                <p className="text-4xl font-bold mt-5  ">Top rating</p>
                <p className="text-2xl mt-3">Subcontent</p>
            </div>
            <div className="w-full max-w-3/4 md:max-w-5/6 mx-auto">
                <RecommendedHotelWrapper />
            </div>
             
        </div>
    )
}

export default Homepage