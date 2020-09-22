import {tasksAPI} from "../api/api";
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'


let initialState = {
    tasks: []
}

export const setTasks = createAsyncThunk(
    'tasks/setTask',
    async () => {
        return await tasksAPI.setTasks()
    }
)
export const addTask = createAsyncThunk(
    'tasks/addTask',
    async (newTaskData, thunkAPI) => {
        return await tasksAPI.addTask(newTaskData)
    }
)

export const delTask = createAsyncThunk(
    'tasks/delTask',
    async (task, thunkAPI) => {
        return await tasksAPI.delTask(task)
    }
)
export const updateTask = createAsyncThunk(
    'tasks/updateTask',
    async (updateTaskData, thunkAPI) => {
        return await tasksAPI.updateTask(updateTaskData)

    }
)
const counterSlice = createSlice({
    name: 'tasks',
    initialState,
    extraReducers: {
        [setTasks.fulfilled]: (state, action) => {
            return {
                ...state, tasks: action.payload
            }
        },
        [addTask.fulfilled]: (state, action) => {
            return {
                ...state, tasks: [...state.tasks, action.payload]
            }
        },
        [delTask.fulfilled]: (state, action) => {
            return {
                ...state, tasks: state.tasks.filter(task => task.id !== action.payload)
            }
        },
        [updateTask.fulfilled]: (state, action) => {
            return  {
                ...state, tasks: state.tasks.map(task => {
                    if (task.id === action.payload.id) return action.payload
                    else return task
                })
            }
        },
    }
})


export default counterSlice.reducer