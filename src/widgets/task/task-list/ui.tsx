import React from 'react'
import { Card } from '@mui/material'
import styled from 'styled-components'
import AddTask from '@/features/task/add-task/ui'
import { TaskRow } from '@/entities/task'
import { ToggleTask } from '@/features/task/toggle-task'
import { DeleteTask } from '@/features/task/delete-task'
import { useAppSelector } from '@/shared/hooks'
import { ITask } from '@/shared/models'
import { theme } from '@/shared/config'

export const TaskList = () => {
	const { data } = useAppSelector((state) => state.taskReducer)

	return (
		<CardList>
			{/*<AddTask />*/}
			{/*{Object.values(data)?.map((task: ITask) => (*/}
			{/*	<TaskRow*/}
			{/*		before={<ToggleTask task={task} />}*/}
			{/*		after={<DeleteTask taskId={task.id} />}*/}
			{/*		task={task}*/}
			{/*	/>*/}
			{/*))}*/}
		</CardList>
	)
}

const CardList = styled(Card)`
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	gap: 20px 0;
	background: transparent !important;
	color: ${theme.colors.green};
`
