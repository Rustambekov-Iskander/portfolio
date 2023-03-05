import React from 'react'
import styled from 'styled-components'
import { core_skills } from './config'
import { Chip } from '@mui/material'
import { motion } from 'framer-motion'
import { standardAnimationVariant } from '@/shared/animations'

export const MainPageSkills = () => {
	return (
		<Wrapper>
			<motion.h3
				variants={standardAnimationVariant}
				initial={'hidden'}
				whileInView={'visible'}
				custom={0}
			>
				Ключевые навыки
			</motion.h3>
			<Skills>
				{core_skills.map((skill, i) => (
					<Chip
						variants={standardAnimationVariant}
						initial={'hidden'}
						whileInView={'visible'}
						custom={i + 1}
						component={motion.div}
						key={skill.title}
						label={skill.title}
						sx={{
							backgroundColor: skill.color,
							color: 'white',
							fontWeight: 600,
						}}
					/>
				))}
			</Skills>
		</Wrapper>
	)
}

const Wrapper = styled.div`
	margin: 50px 0;
`

const Skills = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 20px;
`
