import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useRoute, useNavigate } from 'react-router-dom';
import { currentQuestionActions, resultActions } from '../store';
import { QUIZ_DATA } from '../constants';
import Button from '../components/Button/Button';
import './Quiz.css';

import End from './End';

function Quiz() {
  const [disabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const randomizeQuestion = QUIZ_DATA.sort(() =>
    Math.floor(Math.random() * (QUIZ_DATA.length + 1))
  );

  const currentQuestionIndex = useSelector(
    (state) => state.currentQuestionIndex.currentQuestionIndex
  );

  const result = useSelector((state) => state.result.result);

  const nextQuestionHandler = () => {
    dispatch(currentQuestionActions.setCurrentQuestionIndex());
    setDisabled(false);
    if (currentQuestionIndex === randomizeQuestion.length - 1) {
      navigate('/end');
    }
  };

  console.log(currentQuestionIndex);

  const answerSelectHandler = (e) => {
    const selectedAnswer = e.target.value;
    const correctAnswer = randomizeQuestion[currentQuestionIndex].answers.find(
      (answer) => answer.correct
    ).option;
    if (selectedAnswer === correctAnswer) {
      dispatch(resultActions.correct());
    } else {
      dispatch(resultActions.incorrect());
    }
    setDisabled(true);
  };

  return (
    <div className='quiz-container'>
      {result}
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
