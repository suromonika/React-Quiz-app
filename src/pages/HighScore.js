import { useSelector, useDispatch } from 'react-redux';
import './HighScore.css';

function HighScore() {
  const highScore = useSelector((state) => state.highScore);

  console.log(highScore);

  // const sortedScores = highScore
  //   .map((singleScore) => singleScore.payload)
  //   .sort((a, b) => {
  //     return b - a;
  //   });

  // sortedScores.length = 5;

  return (
    <div>
      <h1>High-score</h1>
      <div className='high-score-list'>
        {/* {sortedScores.map((singleScore) => (
          <div>{singleScore}</div>
        ))} */}
      </div>
    </div>
  );
}

export default HighScore;
