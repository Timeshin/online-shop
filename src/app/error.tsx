'use client'

import { FC } from 'react'
import Error from 'next/error'

interface IError {
	error: Error
	reset: () => void
}

const ErrorComponent: FC<IError> = ({ error, reset }) => {
	return (
		<div>
			<h1>Error</h1>
			<button type='button' onClick={() => reset()}>
				Try again
			</button>
		</div>
	)
}

export default ErrorComponent
