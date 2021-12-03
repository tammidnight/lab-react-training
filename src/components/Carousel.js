import { useState } from 'react';

function Carousel(props) {
  const [img, setImg] = useState(props.imgs[0]);
  const [count, setCount] = useState(0);

  function handleLeft() {
    setCount(count + 1);

    if (count === 0) {
      setImg(props.imgs[0]);
    } else if (count === 1) {
      setImg(props.imgs[3]);
    } else if (count === 2) {
      setImg(props.imgs[2]);
    } else if (count === 3) {
      setImg(props.imgs[1]);
      setCount(0);
    }
  }

  function handleRight() {
    setCount(count + 1);

    if (count === 0) {
      setImg(props.imgs[0]);
    } else if (count === 1) {
      setImg(props.imgs[1]);
    } else if (count === 2) {
      setImg(props.imgs[2]);
    } else if (count === 3) {
      setImg(props.imgs[3]);
      setCount(0);
    }
  }

  return (
    <div>
      <button onClick={handleLeft}>Left</button>
      <img src={img} alt=""></img>
      <button onClick={handleRight}>Right</button>
    </div>
  );
}

export default Carousel;
