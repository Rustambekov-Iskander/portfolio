import React from 'react'
import { Button, Dialog, DialogContent, Typography } from '@mui/material'
import { AddTable } from '@/features/table/add-table'

export const TableModal = () => {
	const [addCardForm, setAddCardForm] = React.useState<boolean>(false)

	return (
		<>
			<Button
				color="primary"
				variant="outlined"
				sx={{ p: '2px 20px' }}
				onClick={() =>
					addCardForm ? setAddCardForm(false) : setAddCardForm(true)
				}
			>
				add table
			</Button>

			<Dialog open={addCardForm} onClose={() => setAddCardForm(false)}>
				<DialogContent>
					<Typography variant="h6" mb={3}>
						add table
					</Typography>
					<AddTable />
				</DialogContent>
			</Dialog>
		</>
	)
}
