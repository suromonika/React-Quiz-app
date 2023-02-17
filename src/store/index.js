import { createSlice, configureStore } from '@reduxjs/toolkit';
import { HIGH_SCORE_KEY } from '../constants';

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

const initialScoreState = {
  score: 0,
};

const scoreSlice = createSlice({
  name: 'score',
  initialState: initialScoreState,
  reducers: {
    addPoints(state) {
      state.score = state.score + 100;
    },

    resetState(state) {
      state.score = initialScoreState.score;
    },
  },
});

const highScoreInitialState = {
  highScore: JSON.parse(window.localStorage.getItem(HIGH_SCORE_KEY)) || [],
  time: '',
};

const highScoreSlice = createSlice({
  name: 'highScore',
  initialState: highScoreInitialState,
  reducers: {
    setHighScore(state, action) {
      const newHighScore = [...state.highScore, action.payload];
      const sortedScores = newHighScore.sort((a, b) => b - a);
      sortedScores.length = 5;
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
  },
});

export const currentQuestionActions = currentQuestionIndexSlice.actions;

export const resultActions = resultSlice.actions;

export const scoreActions = scoreSlice.actions;

export const highScoreActions = highScoreSlice.actions;

export default store;
