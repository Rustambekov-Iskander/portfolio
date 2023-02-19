import React from 'react'
import { Checkbox } from '@mui/material'
import { taskModel } from '@/entities/task'
import { ITask } from '@/shared/models'
import { useAppDispatch } from '@/shared/hooks'

export type ToggleTaskProps = {
	task: ITask
}

export const ToggleTask = ({ task }: ToggleTaskProps) => {
	const dispatch = useAppDispatch()

	const onToggle = () => {
		dispatch(taskModel.toggleTask(+task.id))
		console.log(task)
	}

	return (
		<Checkbox color={'warning'} checked={task?.completed} onClick={onToggle} />
	)
}
