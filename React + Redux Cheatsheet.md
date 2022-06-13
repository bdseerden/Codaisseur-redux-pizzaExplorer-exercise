# React + Redux Setup Cheatsheet! 🧠

### STEP 1: Create react app!

npx create-react-app <name>

### STEP 2: Setup Redux!

npm i @reduxjs/toolkit react-redux

### STEP 3: Create "store" directory containing index.js file

// src/store/index.js

import { configureStore } from "@reduxjs/toolkit";
import somethingReducer from "./some/slice";

const store = configureStore({
reducer: {
something: somethingReducer,
},
});

export default store;

### STEP 4: Create directory containing selectors.js & slice.js
