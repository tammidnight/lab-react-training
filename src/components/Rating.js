function Rating(props) {
  let rating = Math.round(props.children);

  let text = '';

  if (rating === 0) {
    text = '☆☆☆☆☆';
  } else if (rating === 1) {
    text = '★☆☆☆☆';
  } else if (rating === 2) {
    text = '★★☆☆☆';
  } else if (rating === 3) {
    text = '★★★☆☆';
  } else if (rating === 4) {
    text = '★★★★☆';
  } else if (rating === 5) {
    text = '★★★★★';
  }

  return (
    <div>
      <h2>{text}</h2>
    </div>
  );
}

export default Rating;
