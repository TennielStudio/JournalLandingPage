import AboutBackground from "../assets/about-background.png"
import investigating from "../assets/investigating.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={investigating} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Step 1: </p>
        <h1 className="primary-heading">
          Discover the power of clarity
        </h1>
        <p className="primary-text">
          <strong>Design an intentional vision - </strong> Engage in a dynamic exchange with your AI-journal to craft an authentically aligned vision, goals, and weekly plan to gain clarity on your direction.
        </p>
        <p className="primary-text">
        This means you’ll spend less time worrying about next-steps and more on tasks that drive powerful results.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Join the waitlist</button>
          <button className="watch-video-button">
            {" "}
          </button>
        </div>
      </div>

    </div>
  )
}

export default About