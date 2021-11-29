import './style.css';

function IdCard(props) {
  if (props.gender === 'male' || props.gender === 'female') {
    let birth = props.birth.toString();
    birth = birth.slice(0, 15);

    let height = props.height.toString();
    height = [height.slice(0, 1), '.', height.slice(1)].join('');

    return (
      <div className="styledDiv idCard">
        <img src={props.picture} alt="" className="idCardImg"></img>
        <div>
          <p>
            <strong>First name:</strong> {props.firstName}
          </p>
          <p>
            <strong>Last name:</strong> {props.lastName}
          </p>
          <p>
            <strong>Gender:</strong> {props.gender}
          </p>
          <p>
            <strong>Height:</strong> {height}m
          </p>
          <p>
            <strong>Birth:</strong> {birth}
          </p>
        </div>
      </div>
    );
  }
}

export default IdCard;
