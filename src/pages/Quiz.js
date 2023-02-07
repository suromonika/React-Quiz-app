import { useSelector, useDispatch } from 'react-redux';
import { currentQuestionActions, resultActions } from '../store';
import { QUIZ_DATA } from '../constants';
import Button from '../components/Button/Button';
import './Quiz.css';

function Quiz() {
  const dispatch = useDispatch();

  const randomizeQuestion = QUIZ_DATA.sort(() =>
    Math.floor(Math.random() * (QUIZ_DATA.length + 1))
  );

  const currentQuestionIndex = useSelector(
    (state) => state.currentQuestionIndex.currentQuestionIndex
  );

  const result = useSelector((state) => state.result.result);

  const nextQuestionHandler = () => {
    dispatch(currentQuestionActions.setCurrentQuestionIndex());
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
