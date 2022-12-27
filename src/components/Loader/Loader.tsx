import classes from './Loader.module.scss'

const Loader = () => (
	<>
		{Array.from({ length: 4 }).map((item: number) => (
			<div key={item} className={classes.skeleton}>
				<div className={classes.image} />
				<div className={classes.title} />
				<div className={classes.content} />
				<div className={classes.price} />
				<div className={classes.button} />
			</div>
		))}
	</>
)
export default Loader
