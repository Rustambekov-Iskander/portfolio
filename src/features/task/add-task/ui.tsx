import React from 'react'
import { Button, TextField } from '@mui/material'
import { useDispatch } from 'react-redux'
import { taskModel } from '@/entities/task'

const AddTask = () => {
	const dispatch = useDispatch()
	const [task, setTask] = React.useState('')

	const handleSubmit = (e: any) => {
		e.preventDefault()

		dispatch(
			taskModel.addTaskToList({
				id: `${Date.now()}`,
				userId: 1,
				title: task,
				completed: false,
			})
		)
		setTask('')
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				sx={{ bgcolor: 'white' }}
				value={task}
				onChange={({ target }) => setTask(target.value)}
				fullWidth
				placeholder={'введите новую задачу'}
			/>
			<Button type={'submit'}>Добавить</Button>
		</form>
	)
}

export default AddTask
