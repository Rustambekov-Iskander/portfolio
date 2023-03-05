import React from 'react'
import WithQuery from '@/app/providers/WithQuery'
import WithStore from '@/app/providers/WithStore'
import { GlobalStyle } from '@/app/styles/global'
import { Fonts } from '@/shared/config'
import { theme, themeMui } from '@/shared/config'
import { ThemeProvider as ThemeProviderMui } from '@mui/material'
import { ThemeProvider } from 'styled-components'

import nProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Router } from 'next/router'

//Binding events.
Router.events.on('routeChangeStart', () => nProgress.start())
Router.events.on('routeChangeComplete', () => nProgress.done())
Router.events.on('routeChangeError', () => nProgress.done())

const WithProviders: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	React.useEffect(() => {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles) {
			jssStyles.parentElement!.removeChild(jssStyles)
		}
	}, [])

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
