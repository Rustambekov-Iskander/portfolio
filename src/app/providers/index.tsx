import React from 'react'
import WithQuery from '@/app/providers/WithQuery'
import WithStore from '@/app/providers/WithStore'
import { GlobalStyle } from '@/app/styles/global'
import { Fonts } from '@/shared/config'
import { theme, themeMui } from '@/shared/config'
import { ThemeProvider as ThemeProviderMui } from '@mui/material'
import { ThemeProvider } from 'styled-components'

const WithProviders: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<WithQuery>
			<ThemeProviderMui theme={themeMui}>
				<ThemeProvider theme={theme}>
					<Fonts />
					<GlobalStyle />
					<WithStore>{children}</WithStore>
				</ThemeProvider>
			</ThemeProviderMui>
		</WithQuery>
	)
}

export default WithProviders
