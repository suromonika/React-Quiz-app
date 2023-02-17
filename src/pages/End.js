import Button from '../components/Button/Button';
import Score from '../components/Score/Score';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { scoreActions, randomizedDataActions } from '../store';
import './End.css';

function End() {
  const dispatch = useDispatch();

  const tryAgainHandler = () => {
    dispatch(scoreActions.resetState());
    dispatch(randomizedDataActions.randomize());
  };

  return (
    <div>
      <Link to='/high-score'>
        <p>Score-board</p>
      </Link>
      <div className='final-page'>
        <div className='final-page__score'>
          <span>Final Score:</span> <Score></Score>
        </div>

        <Button to='/' onClick={tryAgainHandler}>
          Try Again
        </Button>
      </div>
    </div>
  );
}

export default End;
