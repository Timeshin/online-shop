'use client'

import { FC, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { IProduct } from '@/types/services.interface'
import Image from 'next/image'
import ProductsStore from '@/stores/ProductsStore'
import { IProductInCart } from '@/types/ProductsStore.interface'
import { enableStaticRendering } from 'mobx-react-lite'

import { Button, Counter } from '@/components'

import Heart from 'public/icons/heart.svg'
import HeartRed from 'public/icons/heartRed.svg'

import classes from './ProductItem.module.scss'

enableStaticRendering(typeof window === 'undefined')
interface IProductItem {
	product: IProduct
}

const ProductItem: FC<IProductItem> = observer(({ product }) => {
	const { id, category, description, image, price } = product
	const { productsInCart, favoriteProducts } = ProductsStore
	const [productQuantity, setProductQuantity] = useState(1)
	const isProductSelected = productsInCart.some(({ product }) => product.id === id)
	const isProductFavorite = favoriteProducts.some((favoriteProduct) => favoriteProduct.id === id)

	const onSelectProductHandler = () => {
		const selectedProductData: IProductInCart = {
			product,
			quantity: productQuantity
		}

		ProductsStore.selectProduct(selectedProductData)
	}

	const onSelectFavoriteProductHandler = () => {
		ProductsStore.selectFavoriteProduct(product)
	}

	return (
		<div className={classes.product}>
			<div className={classes.info}>
				<Image
					alt='product'
					src={image}
					placeholder='blur'
					blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8L8JQDwAEwQGUkfP71gAAAABJRU5ErkJggg=='
					className={classes.image}
					width={220}
					height={220}
				/>
				<p className={classes.category}>{category}</p>
				<p className={classes.description}>{description}</p>
			</div>
			<div>
				<div className={classes.price}>
					{Math.round(price * 70)} ₽ <span>/шт.</span>
				</div>
				<div className={classes.product__actions}>
					<div className={classes.buy}>
						<Button
							className={`${classes.button} ${isProductSelected && `${classes.active}`}`}
							onClick={onSelectProductHandler}
						>
							{isProductSelected ? 'В корзине' : 'В корзину'}
						</Button>
						{!isProductSelected && <Counter count={productQuantity} setProductQuantity={setProductQuantity} />}
					</div>
					<Image
						className={classes.favorite}
						src={isProductFavorite ? HeartRed : Heart}
						onClick={onSelectFavoriteProductHandler}
						alt='favorite'
					/>
				</div>
			</div>
		</div>
	)
})

export default ProductItem
