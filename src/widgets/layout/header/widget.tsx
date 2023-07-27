import React from 'react'
import { Container, Typography } from '@mui/material'
import styled from 'styled-components'

import Link from 'next/link'
import { navList } from '@/widgets/layout/header/config'

export const Header = () => {
	return (
		<HeaderWrapper>
			<Container>
				<HeaderInner>
					<Typography
						component={Link}
						href={'/'}
						sx={{ mr: '20px', cursor: 'pointer' }}
						variant={'h5'}
					>
						Iskander Rustambekov
					</Typography>

					<menu>
						{navList.map((nav) => (
							<Link key={nav.id} href={nav.pathname}>
								<li>{nav.label}</li>
							</Link>
						))}
					</menu>
				</HeaderInner>
			</Container>
		</HeaderWrapper>
	)
}

const HeaderWrapper = styled.header`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100vw !important;
	background: #20202380;
	backdrop-filter: blur(5px);
	box-shadow: none !important;
	padding: 10px 0;
	margin-bottom: 15px;
`

const HeaderInner = styled.div`
	display: flex;
	align-items: center;
	gap: 0 20px;
	color: white;

	h5 {
		font-weight: 700;
		font-size: 19px;
	}

	menu {
		display: flex;
		gap: 0 15px;
	}

	a {
		font-weight: 400;
		cursor: pointer;
		transition: 0.2s;
		&:hover {
			color: #64ffda;
		}
	}
`
