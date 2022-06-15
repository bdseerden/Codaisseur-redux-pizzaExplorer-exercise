// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice";
import pizzasReducer from "./pizzas/slice";
import restaurantsReducer from "./restaurants/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    user: userReducer,
    restaurant: restaurantsReducer,
  },
});

export default store;

export { toggleFavorites } from "./user/slice";
