import Visa from '../assets/images/visa.png';
import MasterCard from '../assets/images/master-card.svg';
import './CreditCard.css';

function CreditCard(props) {
  let imgSrc = '';

  if (props.type === 'Visa') {
    imgSrc = Visa;
  } else if (props.type === 'Master Card') {
    imgSrc = MasterCard;
  }

  let number = props.number;
  number = number.slice(12);

  return (
    <div
      style={{ background: props.bgColor, color: props.color }}
      className="creditCardDiv"
    >
      <div className="creditCardImgDiv">
        <img src={imgSrc} alt="" className="creditCardImg"></img>
      </div>
      <h1>**** **** **** {number}</h1>
      <div className="creditCardInfo">
        <p className="creditCardExpire">
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p className="bank">{props.bank}</p>
      </div>
      <p className="owner">{props.owner}</p>
    </div>
  );
}

export default CreditCard;
