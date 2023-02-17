import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  currentQuestionActions,
  resultActions,
  scoreActions,
  highScoreActions,
  disabledActions,
} from '../store';
import Button from '../components/Button/Button';
import './Quiz.css';
import Result from '../components/Result/Result';
import Score from '../components/Score/Score';

function Quiz() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const disabled = useSelector((state) => state.disabled.disabled);
  const score = useSelector((state) => state.score.score);
  const randomizedQuestions = useSelector(
    (state) => state.randomizedQuestions.randomizedQuestions
  );
  const currentQuestionIndex = useSelector(
    (state) => state.currentQuestionIndex.currentQuestionIndex
  );

  const nextQuestionHandler = () => {
    dispatch(currentQuestionActions.setCurrentQuestionIndex());
    dispatch(disabledActions.enable());

    if (currentQuestionIndex === randomizedQuestions.length - 1) {
      dispatch(highScoreActions.setHighScore(score));
      dispatch(currentQuestionActions.resetState());
      navigate('/end');
    }
  };

  const answerSelectHandler = (e) => {
    const selectedAnswer = e.target.value;
    const correctAnswer = randomizedQuestions[
      currentQuestionIndex
    ].answers.find((answer) => answer.correct).option;
    if (selectedAnswer === correctAnswer) {
      dispatch(resultActions.correct());
      dispatch(scoreActions.addPoints());
    } else {
      dispatch(resultActions.incorrect());
    }
    dispatch(disabledActions.disable());
  };

  return (
    <div className='quiz-container'>
      <Score></Score>
      <Result></Result>

      <div className='quiz-container__question'>
        {randomizedQuestions[currentQuestionIndex].question}
      </div>
      <div className='quiz-container__answer'>
        {randomizedQuestions[currentQuestionIndex].answers.map(
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
