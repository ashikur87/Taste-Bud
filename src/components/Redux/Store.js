import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { MealReducer } from "./Reducers/MealReducer";


const rootReducers = combineReducers({
    meals: MealReducer,
})

export const store = createStore(rootReducers, composeWithDevTools())