import { IProductInCart } from '@/types/ProductsStore.interface'
import { IProduct } from '@/types/services.interface'
import { makeAutoObservable } from 'mobx'

class ProductsStore {
	productsInCart: IProductInCart[] = []

	favoriteProducts: IProduct[] = []

	constructor() {
		makeAutoObservable(this)
	}

	selectProduct(productData: IProductInCart) {
		const isProductAlreadySelected = this.productsInCart.some(({ product: { id } }) => id === productData.product.id)

		if (isProductAlreadySelected) {
			this.productsInCart = this.productsInCart.filter(({ product: { id } }) => id !== productData.product.id)
			return
		}

		this.productsInCart = [...this.productsInCart, productData]
	}

	selectFavoriteProduct(product: IProduct) {
		const isProductAlreadyInFavorite = this.favoriteProducts.some(({ id }) => id === product.id)

		if (isProductAlreadyInFavorite) {
			this.favoriteProducts = this.favoriteProducts.filter(({ id }) => id !== product.id)
			return
		}

		this.favoriteProducts = [...this.favoriteProducts, product]
	}
}

export default new ProductsStore()
