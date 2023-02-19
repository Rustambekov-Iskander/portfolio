import React from 'react'
import { Button, TextField } from '@mui/material'
import { useAppDispatch } from '@/shared/hooks'
import { addTable } from '@/entities/table/model'

export const AddTable = () => {
	const dispatch = useAppDispatch()

	const [table, setTable] = React.useState<{ width: string; height: string }>({
		width: '',
		height: '',
	})

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTable({
			...table,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(
			addTable({
				...table,
				id: Date.now(),
			})
		)
	}

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				required
				name={'width'}
				value={table?.width}
				onChange={handleChange}
			/>
			<br />
			<TextField
				required
				name={'height'}
				value={table?.height}
				onChange={handleChange}
			/>
			<Button type={'submit'}>Create</Button>
		</form>
	)
}
