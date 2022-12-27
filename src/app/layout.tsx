import { Roboto } from '@next/font/google'

import '@/styles/globals.scss'

const robotoFont = Roboto({
	weight: ['400', '500', '700'],
	display: 'block',
	subsets: ['latin']
})

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html>
			<body className={robotoFont.className}>{children}</body>
		</html>
	)
}

export default RootLayout
