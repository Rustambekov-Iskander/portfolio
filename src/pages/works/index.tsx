import React from 'react'
import { NextPageWithLayout } from '@/pages/_app'
import { WithLayout } from '@/app/providers/layout'
import styled from 'styled-components'
import { theme } from '@/shared/config'
import Link from 'next/link'

const Works: NextPageWithLayout = () => {
	return (
		<Wrapper>
			<Menu>
				<li>
					<Link href={'/works/2048'}>2048</Link>
				</li>
				<li>
					<Link href={'/works/chess'}>Chess</Link>
				</li>
			</Menu>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	min-height: 80vh;
	text-align: center;
`
const Menu = styled.menu`
	display: grid;
	gap: 20px 0;
	li {
		cursor: pointer;
		transition: 0.3s;
		&:hover {
			color: ${theme.colors.green};
		}
	}
`

Works.getLayout = function (page) {
	return <WithLayout>{page}</WithLayout>
}

export default Works
