import { useSelector } from 'react-redux';
import './HighScore.css';

function HighScore() {
  const highScore = useSelector((state) => state.highScore.highScore);

  return (
    <div>
      <h1>High-score</h1>
      <div className='high-score-list'>
        {highScore.map((singleScore) => (
          <div>{singleScore}</div>
        ))}
      </div>
    </div>
  );
}

export default HighScore;
