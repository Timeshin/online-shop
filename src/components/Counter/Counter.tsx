import { Dispatch, FC, SetStateAction } from 'react'

import classes from './Counter.module.scss'

interface ICounter {
	count: number
	setProductQuantity: Dispatch<SetStateAction<number>>
}

const Counter: FC<ICounter> = ({ count, setProductQuantity }) => {
	const onIncrementProductQuantityHandler = () => {
		if (count === 99) return

		setProductQuantity((prevValue) => ++prevValue)
	}

	const onDecrementProductQuantityHandler = () => {
		if (count === 1) return

		setProductQuantity((prevValue) => --prevValue)
	}

	return (
		<div className={classes.counter}>
			<span className={classes.minus} onClick={onDecrementProductQuantityHandler} />
			<span className={classes.count}>{count}</span>
			<span className={classes.plus} onClick={onIncrementProductQuantityHandler} />
		</div>
	)
}

export default Counter
