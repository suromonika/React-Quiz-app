import { useSelector, useDispatch } from 'react-redux';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  currentQuestionActions,
  resultActions,
  scoreActions,
  highScoreActions,
} from '../store';
import { randomizeQuestion } from '../constants';
import Button from '../components/Button/Button';
import './Quiz.css';
import Result from '../components/Result/Result';
import Score from '../components/Score/Score';

function Quiz() {
  const [disabled, setDisabled] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const currentQuestionIndex = useSelector(
    (state) => state.currentQuestionIndex.currentQuestionIndex
  );

  const nextQuestionHandler = () => {
    dispatch(currentQuestionActions.setCurrentQuestionIndex());
    setDisabled(false);

    if (currentQuestionIndex === randomizeQuestion.length - 1) {
      navigate('/end');

      dispatch(currentQuestionActions.resetState());
    }
  };

  const answerSelectHandler = (e) => {
    const selectedAnswer = e.target.value;
    const correctAnswer = randomizeQuestion[currentQuestionIndex].answers.find(
      (answer) => answer.correct
    ).option;
    if (selectedAnswer === correctAnswer) {
      dispatch(resultActions.correct());
      dispatch(scoreActions.addPoints());
    } else {
      dispatch(resultActions.incorrect());
    }
    setDisabled(true);
  };

  return (
    <div className='quiz-container'>
      <Score></Score>
      <Result></Result>

      <div className='quiz-container__question'>
        {randomizeQuestion[currentQuestionIndex].question}
      </div>
      <div className='quiz-container__answer'>
        {randomizeQuestion[currentQuestionIndex].answers.map(
          (singleAnswer, index) => (
            <Button
              buttonKey={index}
              onClick={answerSelectHandler}
              value={singleAnswer.option}
              disabled={disabled}
            >
              {singleAnswer.option}
            </Button>
          )
        )}
      </div>
      <Button onClick={nextQuestionHandler}>Next</Button>
    </div>
  );
}

export default Quiz;
