import React from 'react'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { useDehydratedState } from 'use-dehydrated-state'

const config = {
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 0,
			cacheTime: 0,
		},
	},
}

const WithQuery: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	const [queryClient] = React.useState(() => new QueryClient(config))
	// const dehydratedState = useDehydratedState()

	return (
		<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
	)
}

export default WithQuery
