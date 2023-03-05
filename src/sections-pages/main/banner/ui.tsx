import React from 'react'
import styled from 'styled-components'
import { Button } from '@mui/material'
import { motion } from 'framer-motion'
import { standardAnimationVariantAside } from '@/shared/animations'
import { useRouter } from 'next/router'

export const MainPageBanner = () => {
	const { push } = useRouter()
	return (
		<Wrapper>
			<div style={{ marginTop: '-10vh' }}>
				<motion.h2
					initial={'hidden'}
					whileInView={'visible'}
					variants={standardAnimationVariantAside()}
					custom={1}
				>
					Hello world!
				</motion.h2>

				<motion.h3
					initial={'hidden'}
					whileInView={'visible'}
					variants={standardAnimationVariantAside()}
					custom={2}
				>
					Я Frontend разработчик из Бишкека (Кыргызстан)
				</motion.h3>
				<Button
					component={motion.div}
					initial={'hidden'}
					whileInView={'visible'}
					variants={standardAnimationVariantAside()}
					custom={3}
					variant={'contained'}
					onClick={() => push('/works')}
				>
					Мои работы
				</Button>
			</div>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	height: 90vh;
	display: flex;
	align-items: center;
	text-align: justify;
`
