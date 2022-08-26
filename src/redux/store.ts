import {configureStore} from "@reduxjs/toolkit";
import { blackJackReducer } from "./blackJackSlice";

const store = configureStore({ reducer: blackJackReducer });

export default store;