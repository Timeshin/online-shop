import { ButtonHTMLAttributes, FC, ReactNode } from 'react'

import classes from './Button.module.scss'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode
}

const Button: FC<IButton> = ({ children, className, ...props }) => (
	<button type='button' className={`${classes.button} ${className}`} {...props}>
		{children}
	</button>
)

export default Button
