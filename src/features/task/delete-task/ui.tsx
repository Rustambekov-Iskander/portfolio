import React from 'react'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from 'react-redux'
import { taskModel } from '@/entities/task'

type DeleteTaskProps = {
	taskId: number | string
}
export const DeleteTask = ({ taskId }: DeleteTaskProps) => {
	const dispatch = useDispatch()

	const onDelete = () => {
		dispatch(taskModel.deleteTask(taskId))
	}

	return (
		<IconButton onClick={onDelete}>
			<DeleteIcon />
		</IconButton>
	)
}
