import './style.css';

function Greetings(props) {
  let text = '';
  if (props.lang === 'de') {
    text = 'Hallo';
  } else if (props.lang === 'fr') {
    text = 'Bonjour';
  }

  return (
    <div className="styledDiv">
      {text} {props.children}
    </div>
  );
}

export default Greetings;
