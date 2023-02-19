import type { AppProps } from 'next/app'
import WithProviders from '@/app/providers'
import { Hydrate } from 'react-query'

const App = ({ Component, pageProps }: AppProps) => {
	return (
		<WithProviders>
			<Hydrate state={pageProps.dehydratedState}>
				<Component {...pageProps} />
			</Hydrate>
		</WithProviders>
	)
}
export default App
