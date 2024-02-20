export interface Product {
    title: string;
    price: number;
    image: string;
}

export interface IProductService {
    getAllProducts(): Promise<any>;
    getProductCategories(): Promise<any>;
    getProductById(id: string): Promise<Product>;
    searchProducts(query: string): Promise<Product[]>;
    getLimitedProducts(limit: number, skip: number, select: string): Promise<Product[]>;
    getProductsByCategory(category: string, limit?: number, skip?: number): Promise<Product[]>;
}