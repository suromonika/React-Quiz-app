import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCurrentQuestionIndexState = { currentQuestionIndex: 0 };

const currentQuestionIndexSlice = createSlice({
  name: 'currentQuestionIndex',
  initialState: initialCurrentQuestionIndexState,
  reducers: {
    setCurrentQuestionIndex(state) {
      state.currentQuestionIndex++;
    },
  },
});

const initialResultState = { result: null };

const resultSlice = createSlice({
  name: 'result',
  initialState: initialResultState,
  reducers: {
    correct(state) {
      state.result = <div>Correct</div>;
    },
    incorrect(state) {
      state.result = <div>Incorrect</div>;
    },
  },
});

const store = configureStore({
  reducer: {
    currentQuestionIndex: currentQuestionIndexSlice.reducer,
    result: resultSlice.reducer,
  },
});

export const currentQuestionActions = currentQuestionIndexSlice.actions;

export const resultActions = resultSlice.actions;

export default store;
