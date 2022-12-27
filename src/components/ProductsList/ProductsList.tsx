import ProductsService from '@/services/products.service'
import Image from 'next/image'

import { ProductItem } from '@/components'

import Banner1 from 'public/images/banner1.png'
import Banner2 from 'public/images/banner2.png'

import classes from './ProductList.module.scss'

const ProductsList = async () => {
	const products = await ProductsService.getProducts()

	return (
		<>
			<div className={classes.advertising}>
				<h2>Всё для комфортной работы</h2>
				<span className={classes.arrow} />
				<div className={classes.banners}>
					<Image src={Banner1} alt='banner' />
					<Image src={Banner2} alt='banner' />
				</div>
			</div>
			{products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</>
	)
}

export default ProductsList
