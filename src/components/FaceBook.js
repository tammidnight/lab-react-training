import profiles from '../data/berlin.json';
import './FaceBook.css';
import { useState } from 'react';

function FaceBook() {
  const [allProfiles, setProfiles] = useState(profiles);
  const [country, setCountry] = useState('');

  let buttonArr = [];

  allProfiles.map((elem) => {
    return buttonArr.push(elem.country);
  });

  buttonArr = [...new Set(buttonArr)];

  function clickAll() {
    setCountry('');
  }

  function clickCountry(countr) {
    setCountry(countr);
  }

  function getBackground(countr) {
    if (country === countr) {
      return 'lightBlue';
    } else {
      return 'white';
    }
  }

  return (
    <div>
      <button onClick={clickAll}>All</button>
      {buttonArr.map((elem, index) => {
        return (
          <button
            onClick={() => {
              clickCountry(elem);
            }}
            style={{ backgroundColor: getBackground(elem) }}
          >
            {elem}
          </button>
        );
      })}
      {allProfiles.map((elem, index) => {
        return (
          <div
            className="facebook"
            key={`${index}`}
            style={{ backgroundColor: getBackground(elem.country) }}
          >
            <img src={elem.img} alt=""></img>
            <div>
              <p>
                <strong>First name:</strong> {elem.firstName}
              </p>
              <p>
                <strong>Last name:</strong> {elem.lastName}
              </p>
              <p>
                <strong>Country:</strong> {elem.country}
              </p>
              <p>
                <strong>Type:</strong> {elem.isStudent && 'Student'}
                {!elem.isStudent && 'Teacher'}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FaceBook;
