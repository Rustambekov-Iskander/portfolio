import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITask } from '@/shared/models'
import { normalize, schema } from 'normalizr'

export type QueryConfig = {
	userId?: number
	completed?: boolean
}
type NormalizedTasks = Record<number, ITask>

export const tasksSchema = new schema.Entity<ITask>('tasks')
export const normalizeTask = (data: ITask) =>
	normalize<ITask, { tasks: NormalizedTasks }>(data, tasksSchema)
export const normalizeTasks = (data: ITask[]) =>
	normalize<ITask, { tasks: NormalizedTasks }>(data, [tasksSchema])

const initialState: {
	data: NormalizedTasks
	queryConfig?: QueryConfig
} = {
	data: {},
	queryConfig: {},
}

const Tasks = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		setTasksList: (state, { payload: tasks }: PayloadAction<ITask[]>) => {
			state.data = normalizeTasks(tasks).entities.tasks
		},
		addTaskToList: (state, { payload: task }: PayloadAction<ITask>) => {
			state.data = { ...normalizeTask(task).entities.tasks, ...state.data }
		},
		deleteTask: (
			state,
			{ payload: taskId }: PayloadAction<string | number | any>
		) => {
			delete state.data[taskId]
		},
		toggleTask: ({ data }, { payload: taskId }: PayloadAction<number>) => {
			data[taskId].completed = !data[taskId].completed
		},
		setQueryConfig: (state, { payload }: PayloadAction<QueryConfig>) => {
			state.queryConfig = payload
		},
	},
})

export const { deleteTask, addTaskToList, toggleTask, setQueryConfig } =
	Tasks.actions

export const reducer = Tasks.reducer
