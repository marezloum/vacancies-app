// store.js
import { configureStore } from "@reduxjs/toolkit";
import { vacancies, likes } from "./reducers";

const store = configureStore({
  reducer: { vacancies: vacancies, likes: likes },
});

export default store;
