import './style.css';

function Random(props) {
  let random = Math.floor(Math.random() * (props.max - props.min)) + props.min;

  return (
    <div className="styledDiv">
      Random value between {props.min} and {props.max} ={'>'} {random}
    </div>
  );
}

export default Random;
