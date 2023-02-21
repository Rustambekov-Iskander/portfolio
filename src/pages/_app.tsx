import type { AppProps } from 'next/app'
import WithProviders from '@/app/providers'
import { Hydrate } from 'react-query'
import React from 'react'
import { NextPage } from 'next'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: React.ReactElement) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout || ((page) => page)

	return getLayout(
		<WithProviders>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
		</WithProviders>
	)
}
export default App
