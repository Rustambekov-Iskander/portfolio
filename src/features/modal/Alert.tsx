import React from 'react'
import { BasicModal } from '@/shared/components/modal/BasicModal'
import styled from 'styled-components'
import { Button } from '@mui/material'

interface AlertModalProps {
	title: string
	description?: string
}

export const AlertModal: React.FC<AlertModalProps> = ({
	title,
	description,
}) => {
	const [open, setOpen] = React.useState(true)

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<BasicModal open={open} setOpen={setOpen}>
			<Wrapper>
				<div>
					<h3>{title}</h3>
					<p>{description}</p>
				</div>

				<Button onClick={handleClose}>Ok</Button>
			</Wrapper>
		</BasicModal>
	)
}

const Wrapper = styled.div`
	display: grid;
	align-items: center;
`
