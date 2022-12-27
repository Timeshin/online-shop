import { Suspense } from 'react'
import { Loader, ProductsList } from '@/components'

import classes from '@/styles/MainPage/MainPage.module.scss'

const MainPage = () => (
	<main className={classes.wrapper}>
		<div className={classes.content}>
			<Suspense fallback={<Loader />}>
				{' '}
				{/* Also can use loading.tsx */}
				{/* @ts-expect-error Server Component */}
				<ProductsList />
			</Suspense>
		</div>
	</main>
)

export default MainPage
