import { useState } from 'react';
import './Dice.css';
import DiceEmpty from '../assets/images/dice-empty.png';
import DiceOne from '../assets/images/dice1.png';
import DiceTwo from '../assets/images/dice2.png';
import DiceThree from '../assets/images/dice3.png';
import DiceFour from '../assets/images/dice4.png';
import DiceFive from '../assets/images/dice5.png';
import DiceSix from '../assets/images/dice6.png';

function Dice() {
  let [imgSrc, setImg] = useState(DiceThree);

  function handleClick() {
    setImg(DiceEmpty);

    setTimeout(() => {
      let random = Math.floor(Math.random() * (6 - 1)) + 1;

      if (random === 1) {
        setImg(DiceOne);
      } else if (random === 2) {
        setImg(DiceTwo);
      } else if (random === 3) {
        setImg(DiceThree);
      } else if (random === 4) {
        setImg(DiceFour);
      } else if (random === 5) {
        setImg(DiceFive);
      } else if (random === 6) {
        setImg(DiceSix);
      }
    }, 1000);
  }

  return <img src={imgSrc} alt="" onClick={handleClick} className="dice"></img>;
}

export default Dice;
