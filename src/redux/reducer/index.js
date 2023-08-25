// Sử dụng combine để gộp nhiêu reducer
import { combineReducers } from "redux";
import count from "./count";

// Khai báo reducer tổng
export const reducer = combineReducers({ count });
