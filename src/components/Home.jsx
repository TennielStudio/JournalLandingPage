import BannerBackground from "../assets/home-banner-background.png"
import BannerImage from "../assets/information-book.png"
import { FiArrowRight } from "react-icons/fi"

const Home = () => {
  return (
    <div className="home-container">
      {/* <Navbar /> */}
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Let's talk about YOU.
          </h1>
          <p className="primary-text">
           Defeat self-doubt, uncertainty, and fear in your entrepreneurial journey with your interactive AI-journal companion.
          </p>
          <button className="secondary-button">
            Join The Waitlist <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-container">
          <img src={BannerImage} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Home