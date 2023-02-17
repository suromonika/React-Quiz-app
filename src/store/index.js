import { createSlice, configureStore } from '@reduxjs/toolkit';
import { HIGH_SCORE_KEY, randomizedQuestion } from '../constants';

//Sets new question index when needed
const initialCurrentQuestionIndexState = { currentQuestionIndex: 0 };

const currentQuestionIndexSlice = createSlice({
  name: 'currentQuestionIndex',
  initialState: initialCurrentQuestionIndexState,
  reducers: {
    setCurrentQuestionIndex(state) {
      state.currentQuestionIndex++;
    },
    resetState(state) {
      state.currentQuestionIndex =
        initialCurrentQuestionIndexState.currentQuestionIndex;
    },
  },
});

//Randomizes questions
const initialRandomizedDataState = { randomizedQuestions: randomizedQuestion };

const randomizedDataSlice = createSlice({
  name: 'randomizedQuestions',
  initialState: initialRandomizedDataState,
  reducers: {
    randomize(state) {
      state.randomizedQuestions = state.randomizedQuestions.sort(
        () => 0.5 - Math.random()
      );
    },
  },
});

//Shouws if answer is correct or incorrect
const initialResultState = { result: null };

const resultSlice = createSlice({
  name: 'result',
  initialState: initialResultState,
  reducers: {
    correct(state) {
      state.result = 'Correct';
    },
    incorrect(state) {
      state.result = 'Incorrect';
    },
  },
});

//Disables buttons after answer is picked

const initialDisabledState = { disabled: false };

const disabledSlice = createSlice({
  name: 'disabled',
  initialState: initialDisabledState,
  reducers: {
    disable(state) {
      state.disabled = true;
    },

    enable(state) {
      state.disabled = false;
    },
  },
});

//Accumulates score
const initialScoreState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState: initialScoreState,
  reducers: {
    addPoints(state) {
      state.score = state.score + 10000;
    },

    resetState(state) {
      state.score = initialScoreState.score;
    },
  },
});

//Saves top 5 high scores

const highScoreInitialState = {
  highScore: JSON.parse(window.localStorage.getItem(HIGH_SCORE_KEY)) || [],
};

const highScoreSlice = createSlice({
  name: 'highScore',
  initialState: highScoreInitialState,
  reducers: {
    setHighScore(state, action) {
      const newHighScore = [...state.highScore, action.payload];
      const sortedScores = newHighScore.sort((a, b) => b - a).slice(0, 5);

      window.localStorage.setItem(HIGH_SCORE_KEY, JSON.stringify(sortedScores));
    },
  },
});

const store = configureStore({
  reducer: {
    currentQuestionIndex: currentQuestionIndexSlice.reducer,
    result: resultSlice.reducer,
    score: scoreSlice.reducer,
    highScore: highScoreSlice.reducer,
    randomizedQuestions: randomizedDataSlice.reducer,
    disabled: disabledSlice.reducer,
  },
});

export const currentQuestionActions = currentQuestionIndexSlice.actions;

export const disabledActions = disabledSlice.actions;

export const resultActions = resultSlice.actions;

export const scoreActions = scoreSlice.actions;

export const highScoreActions = highScoreSlice.actions;

export const randomizedDataActions = randomizedDataSlice.actions;

export default store;
