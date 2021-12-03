import { useState } from 'react';

function LikeButton() {
  let [count, setCount] = useState(0);
  let [color, setColor] = useState('purple');

  function handleClick() {
    setCount(count + 1);

    let random = Math.floor(Math.random() * (6 - 1)) + 1;

    if (random === 1) {
      setColor('purple');
    } else if (random === 2) {
      setColor('blue');
    } else if (random === 3) {
      setColor('green');
    } else if (random === 4) {
      setColor('yellow');
    } else if (random === 5) {
      setColor('orange');
    } else if (random === 6) {
      setColor('red');
    }
  }

  return (
    <button onClick={handleClick} style={{ background: color }}>
      Like {count}
    </button>
  );
}

export default LikeButton;
