import { QueryProvider } from '@redshank/fetch-resolver'
import { ApolloProvider } from '@apollo/client'
import { DAppProvider } from '@usedapp/core'
import { configWeb3 } from '../config'
import client from '../config/apollo'
export interface MainProviderProps {
  children: React.ReactNode
}

export const MainProvider = ({ children }: MainProviderProps) => {
  return (
    <ApolloProvider client={client}>
      {' '}
      <QueryProvider
        config={{
          baseURL: import.meta.env.VITE_API_BASE,
        }}
      >
        <DAppProvider config={configWeb3}>{children}</DAppProvider>
      </QueryProvider>{' '}
    </ApolloProvider>
  )
}
