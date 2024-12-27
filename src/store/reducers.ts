// reducers.js
import { createSlice } from "@reduxjs/toolkit";
import { VACANCIES, Vacancy } from "../state/state";

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState: {
    allVacancies: VACANCIES,
  },
  reducers: {
    addVacancy: (state, action) => {
      const newVacancy = { ...action.payload };
      const currentVacancies = [...state.allVacancies];
      currentVacancies.sort((a, b) => a.id - b.id);
      newVacancy.id = currentVacancies[currentVacancies.length - 1].id + 1;
      state.allVacancies = [...state.allVacancies, newVacancy] as Vacancy[];
    },
    deleteVacancy: (state, action) => {
      state.allVacancies = state.allVacancies.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
  },
});
const likeSlice = createSlice({
  name: "likes",
  initialState: {
    allLiked: [4] as number[],
  },
  reducers: {
    addLike: (state, action) => {
      state.allLiked = [...state.allLiked, action.payload.id] as number[];
    },
    deleteLike: (state, action) => {
      state.allLiked = state.allLiked.filter(
        (item: any) => item !== action.payload.id
      );
    },
  },
});

export const { addVacancy, deleteVacancy } = vacanciesSlice.actions;
export const vacancies = vacanciesSlice.reducer;

export const { addLike, deleteLike } = likeSlice.actions;
export const likes = likeSlice.reducer;
