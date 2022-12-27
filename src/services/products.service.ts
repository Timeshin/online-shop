import { IProduct } from '@/types/services.interface'

class ProductsService {
	private readonly apiUrl: string

	constructor(url: string) {
		this.apiUrl = url
	}

	getProducts = async (): Promise<IProduct[]> => {
		const response = await fetch(`${this.apiUrl}/products`)

		return response.json()
	}
}

export default new ProductsService(process.env.NEXT_PUBLIC_API)
