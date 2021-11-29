import './style.css';

function BoxColor(props) {
  function ColorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length === 1 ? '0' + hexadecimal : hexadecimal;
  }

  function ConvertRGBtoHex(red, green, blue) {
    return '#' + ColorToHex(red) + ColorToHex(green) + ColorToHex(blue);
  }
  let hex = ConvertRGBtoHex(props.r, props.g, props.b);

  return (
    <div
      style={{ backgroundColor: hex, textAlign: 'center' }}
      className="styledDiv"
    >
      rgb({props.r}, {props.g}, {props.b})<br />
      {hex}
    </div>
  );
}

export default BoxColor;
