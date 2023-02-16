import Button from '../components/Button/Button';
import Score from '../components/Score/Score';

import { useDispatch, useSelector } from 'react-redux';
import { scoreActions } from '../store';
import './End.css';

function End() {
  const dispatch = useDispatch();
  const tryAgainHandler = () => {
    dispatch(scoreActions.resetState());
  };

  const enterNameHandler = (e) => {
    e.prevent.default();
    dispatch(scoreActions.addName(e.target.value));
  };

  return (
    <div className='final-page'>
      <div className='final-page__score'>
        <span>Final Score:</span> <Score></Score>
        <form onSubmit={enterNameHandler}>
          <input type='text' placeholder='Enter Your Name'></input>
          <Button Buttontype='submit'>Submit</Button>
        </form>
      </div>

      <Button to='/' onClick={tryAgainHandler}>
        Try Again
      </Button>
    </div>
  );
}

export default End;
