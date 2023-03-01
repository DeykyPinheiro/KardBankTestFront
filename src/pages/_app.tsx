import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import UserProvider from './components/contexts/UserContext'
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './components/Layout'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </Layout>
  )
}
