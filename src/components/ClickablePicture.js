import { useState } from 'react';

function ClickablePicture(props) {
  let [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  let image = clicked ? props.imgClicked : props.img;
  return (
    <div>
      <img src={image} alt="" onClick={handleClick}></img>
    </div>
  );
}

export default ClickablePicture;
