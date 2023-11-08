import { QueryProvider } from '@redshank/fetch-resolver';
import { DAppProvider } from "@usedapp/core";
import { configWeb3 } from '../config';

export interface MainProviderProps  { 
    children: React.ReactNode
 }

export const MainProvider = ({children}: MainProviderProps)=> {
   return (  <QueryProvider
    config={{
      baseURL: import.meta.env.VITE_API_BASE,
    }}
  >
  <DAppProvider config={configWeb3}>
  {children}
  </DAppProvider>
  </QueryProvider>)
}