import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
	console.log('re-render APP', process.env.NODE_ENV_STATE)
	return <Component {...pageProps} />
}
