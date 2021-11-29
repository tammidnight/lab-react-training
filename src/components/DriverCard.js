import './DriverCard.css';
import Rating from './Rating';

function DriverCard(props) {
  const { model, licensePlate } = props.car;

  return (
    <div className="driverCard">
      <img src={props.img} alt="" className="driverImg"></img>
      <div>
        <h2>{props.name}</h2>
        <Rating>{props.rating}</Rating>
        <p>
          {model} - {licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
