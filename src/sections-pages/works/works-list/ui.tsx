import React from 'react'
import { worksList } from '@/sections-pages/works/config'
import { SimpleCard } from '@/shared/components/card/simple-card'
import styled from 'styled-components'
import { useRouter } from 'next/router'

export const WorksPageWorksList = () => {
	const { push } = useRouter()
	return (
		<Wrapper>
			{Object.values(worksList).map((work) => (
				<SimpleCard
					key={work.title}
					title={work.title}
					img={work.images[0].link}
					description={work.text}
					onClick={() => push(`/works/${work.link}`)}
				/>
			))}
		</Wrapper>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
`
