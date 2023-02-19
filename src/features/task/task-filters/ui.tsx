import React from 'react'
import { useAppDispatch, useAppSelector } from '@/shared/hooks'
import { Card, FormControlLabel, Radio, RadioGroup } from '@mui/material'
import styled from 'styled-components'
import { taskModel } from '@/entities/task'

export const TaskFilter = () => {
	const dispatch = useAppDispatch()
	const { queryConfig } = useAppSelector((state) => state.taskReducer)

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(
			taskModel.setQueryConfig({
				completed: !!e.target.value,
				userId: 12,
			})
		)
	}

	return (
		<FilterDiv>
			<RadioGroup onChange={onChange} value={queryConfig?.completed}>
				<FormControlLabel value={true} control={<Radio />} label="completed" />
				<FormControlLabel
					value={false}
					control={<Radio />}
					label="uncompleted"
				/>
			</RadioGroup>
		</FilterDiv>
	)
}

const FilterDiv = styled(Card)`
	display: flex;
	gap: 0 20px;
`
