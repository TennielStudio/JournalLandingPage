import PickMeals from "../assets/pick-meals-image.png"
import ChooseMeals from "../assets/choose-image.png"
import DeliveryMeals from "../assets/delivery-image.png"

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id ea impedit, tempora modi recusandae dicta delectus beatae assumenda cum nisi ullam minima! Quae tempore sunt esse repellat. Eius, quaerat.",
    },
    {
      image: ChooseMeals,
      title: "Choose Meals",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit..",
    },
    {
      image: DeliveryMeals,
      title: "Delivery Meals",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur id ea impedit, tempora modi recusandae dicta delectus beatae assumenda cum nisi ullam minima! Quae tempore ",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How it Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam mollitia quos dicta ab eum expedita dolore ut ipsam eveniet maxime voluptas, facere nam? Beatae saepe, voluptas eveniet nihil sit voluptates!
        </p>
      </div>
      <div className="work-section-bottom">
        {
          workInfoData.map((data) => {
            <div className="work-section-info">
              <div className="info-boxes-img-container">
                <img src={data.image} alt="" />
                </div>
                <h2>{data.title}</h2>
                <p>{data.text}</p>
              </div>
          })
        }
      </div>
    </div>
  )
}

export default Work