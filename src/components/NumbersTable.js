import './NumbersTable.css';

function NumbersTable(props) {
  let numberArr = [];

  for (let i = 1; i <= props.limit; i++) {
    let number = {
      number: i,
      color: i % 2 ? 'white' : 'red',
    };
    numberArr.push(number);
  }

  return (
    <div className="table">
      {numberArr.map((elem, index) => {
        return (
          <div
            key={index}
            style={{ background: elem.color }}
            className="numbers"
          >
            {elem.number}
          </div>
        );
      })}
    </div>
  );
}

export default NumbersTable;
