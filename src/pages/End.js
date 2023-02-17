import Button from '../components/Button/Button';
import Score from '../components/Score/Score';

import { useDispatch, useSelector } from 'react-redux';
import { scoreActions, highScoreActions } from '../store';
import './End.css';

function End() {
  const dispatch = useDispatch();
  const score = useSelector((state) => state.score.score);

  dispatch(highScoreActions.setHighScore(score));

  const tryAgainHandler = () => {
    dispatch(scoreActions.resetState());
  };

  return (
    <div className='final-page'>
      <div className='final-page__score'>
        <span>Final Score:</span> <Score></Score>
      </div>

      <Button to='/' onClick={tryAgainHandler}>
        Try Again
      </Button>
    </div>
  );
}

export default End;
