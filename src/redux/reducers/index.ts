import { combineReducers } from "@reduxjs/toolkit";
import HomReducer from "./homReducer";
import TabReducer from "./tabReducer";

const rootReducer= combineReducers({
    homeReducer:HomReducer,
    tabReducer:TabReducer,
});

export type ApplicationState = ReturnType<typeof rootReducer>;

export default rootReducer;