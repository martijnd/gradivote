import Amplify from 'aws-amplify'
import { AppProps } from 'next/app'
import '../styles/index.css'
import awsconfig from '../aws-exports'

Amplify.configure({
  ...awsconfig, ssr: true
})

function MyApp ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
