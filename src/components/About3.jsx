import AboutBackground from "../assets/about-background.png"
import openchest from "../assets/openchest.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About3 = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={openchest} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Step 3: </p>
        <h1 className="primary-heading">
          Unlock new levels of alignment & results
        </h1>
        <p className="primary-text">
        <strong>Complete journal analysis - </strong>Your AI-journal meticulously evaluates your daily entries and crafts personalized insights, helping to align your work closely with your vision and goals.
        </p>
        <p className="primary-text">
        Your journal will challenge limiting beliefs, identify recurring patterns and themes, and reveal hidden blind-spots in your thinking.
        </p>
        <p className="primary-text">
        This means your rate of revelation increases, leading to greater clarity, frequent ‘aha’ moments, and aligned action on your journey.        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Join the Waitlist</button>
          <button className="watch-video-button">
            {" "}
          </button>
        </div>
      </div>

    </div>
  )
}

export default About3