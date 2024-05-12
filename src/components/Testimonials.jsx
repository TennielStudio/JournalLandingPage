import ProfilePic from "../assets/john-doe-image.png"
import {AiFillStar} from "react-icons/ai"

const Testimonials = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-subheading">
          What They Are Saying
        </h1>
        <p className="primary-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur blanditiis cupiditate aspernatur eius, maiores similique recusandae aperiam optio facilis assumenda eos alias, deleniti harum magni, cum amet repellat. Dolore, dignissimos?
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ipsa natus cupiditate eos non explicabo hic, est, similique velit excepturi soluta! Quidem sapiente eaque praesentium dolor laborum quia odit saepe.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>John Doe</h2>
      </div>
    </div>
  )
}

export default Testimonials