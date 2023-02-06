import { useState, useId } from 'react';
import { QUIZ_DATA } from '../constants';
import Button from '../components/Button/Button';
import './Quiz.css';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [result, setResult] = useState();

  const randomizeQuestion = QUIZ_DATA.sort(() =>
    Math.floor(Math.random() * (QUIZ_DATA.length + 1))
  );

  const nextQuestionHandler = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const answerSelectHandler = (e) => {
    const selectedAnswer = e.target.value;
    const correctAnswer = randomizeQuestion[currentQuestionIndex].answers.find(
      (answer) => answer.correct
    ).option;
    if (selectedAnswer === correctAnswer) {
      setResult(<div>Correct</div>);
    } else {
      setResult(<div>Incorrect</div>);
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
