import PickMeals from "../assets/pick-meals-image.png"
import ChooseMeals from "../assets/choose-image.png"
import DeliveryMeals from "../assets/delivery-image.png"

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Personalized 1:1 Feedback",
      text: "Ea laborum nisi tempor aliquip ea excepteur magna labore."
    },
    {
      image: ChooseMeals,
      title: "Identify mental blocks",
      text: "Nisi nulla adipisicing adipisicing et mollit sit do nostrud et."
    },
    {
      image: DeliveryMeals,
      title: "Pivot & progress faster",
      text: "Fugiat proident ea eiusmod id ullamco qui."
    },
  ];

  return (
    <div className="work-section-wrapper">
      {/* <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia quos dicta ab eum expedita dolore ut ipsam eveniet maxime voluptas, facere nam? Beatae saepe, voluptas eveniet nihil sit voluptates!
        </p>
      </div> */}
      <div className="work-section-bottom">
        {
          workInfoData.map((data, index) => (
            <div className="work-section-info" key={index}>
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
              </div>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Work