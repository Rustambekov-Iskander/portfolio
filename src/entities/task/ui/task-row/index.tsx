import React from 'react'
import styled from 'styled-components'
import { ITask } from '@/shared/models'
import { Typography } from '@mui/material'
import { theme } from '@/shared/config'

type TaskRowProps = {
	before?: React.ReactNode
	after?: React.ReactNode
	task: ITask
}

export const TaskRow = ({ task, before, after }: TaskRowProps) => {
	return (
		<Row>
			<div>{before}</div>
			<Typography variant={'h3'}>{task.title}</Typography>
			<div>{after}</div>
		</Row>
	)
}

const Row = styled.div`
	display: grid;
	grid-template-columns: 10% 70% 20%;
	align-items: center;
	gap: 0 20px;
	padding: 20px 10px;
	border: 1px solid ${theme.colors.green};
	border-radius: 5px;
	box-shadow: 0 0 5px ${theme.colors.green};
	background-color: darkcyan;
	color: white;
`
