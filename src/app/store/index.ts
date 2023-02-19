import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducer as taskReducer } from '@/entities/task/model'
import { reducer as tableReducer } from '@/entities/table/model'

const rootReducer = combineReducers({
	taskReducer,
	tableReducer,
})

export const store = () =>
	configureStore({
		reducer: rootReducer,
	})

export type Store = ReturnType<typeof store>
export type RootState = ReturnType<typeof rootReducer>
export type AppDispatch = Store['dispatch']
