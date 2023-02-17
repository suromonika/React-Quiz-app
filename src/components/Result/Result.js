import { useSelector } from 'react-redux';
import './Result.css';

function Result() {
  const result = useSelector((state) => state.result.result);
  let className;
  if (result === 'Correct') {
    className = 'Result Result--correct';
  } else {
    className = 'Result Result--incorrect';
  }

  return <h1 className={className}>{result}</h1>;
}

export default Result;
