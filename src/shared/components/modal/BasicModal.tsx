import * as React from 'react'
import { Box, Modal } from '@mui/material'
import { SetStateAction } from 'react'

interface BasicModalProps {
	children: React.ReactNode
	open: boolean
	setOpen: React.Dispatch<SetStateAction<boolean>>
}

export const BasicModal: React.FC<BasicModalProps> = ({
	children,
	open,
	setOpen,
}) => {
	const handleClose = () => setOpen(false)

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={BoxStyle}>{children}</Box>
		</Modal>
	)
}

const BoxStyle = {
	position: 'absolute' as 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: 'none',
	borderRadius: '5px',
	boxShadow: 24,
	p: 4,
}
