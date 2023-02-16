import { useSelector } from 'react-redux';

import './Score.css';

function Score() {
  const score = useSelector((state) => state.score.score);

  return <div className='Score'>{score}</div>;
}

export default Score;
