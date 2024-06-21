import AboutBackground from "../assets/about-background.png"
import questionmark from "../assets/questionmark.png"
import { BsFillPlayCircleFill } from "react-icons/bs"

const About2 = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={questionmark} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">Step 2: </p>
        <h1 className="primary-heading">
          Reflect deeply. Track Progress & Emotions
        </h1>
        <p className="primary-text">
        <strong>Private, safe-space - </strong> Indulge in distraction-free journaling with tailored prompts to record your daily work progress and emotions.
        </p>
        <p className="primary-text">
        This means you’ll enjoy a safe-space to openly express struggles, uncertainties, and doubts in your entrepreneurial journey, offering a therapeutic outlet for thoughts and feelings
        </p>
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

export default About2