import { IProduct } from '@/types/services.interface'

export interface IProductInCart {
	product: IProduct
	quantity: number
}
