import { combineReducers } from "redux";
import tagsReducer from "./tagsReducer";
import questionsReducer from "./questionsReducer";

const reducers = combineReducers({
  tags: tagsReducer,
  questions: questionsReducer,
});

export default reducers;
