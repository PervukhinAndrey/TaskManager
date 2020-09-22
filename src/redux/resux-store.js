

import {configureStore} from "@reduxjs/toolkit"
import tasksReducer from "./tasksReducer";

console.log(tasksReducer)
const reducer={
     tasksReducer
};


const store= configureStore({reducer});

export default store;


