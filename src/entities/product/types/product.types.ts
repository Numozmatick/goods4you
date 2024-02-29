export interface Product {
    id: number;
    title: string;
    description?: any;
    price?: number;
    discount?: number;
    discountPercentage?: number;
    rating?: number;
    stock?: number;
    brand?: string;
    category?: string;
    image?: string;
    thumbnail?: string;
    images?: string[];
}

export interface IProductService {
    getAllProducts(): Promise<any>;
    getProductCategories(): Promise<any>;
    getProductById(id: string): Promise<Product>;
    searchProducts(query: string): Promise<Product[]>;
    getLimitedProducts(limit: number, skip: number, select: string): Promise<Product[]>;
    getProductsByCategory(category: string, limit?: number, skip?: number): Promise<Product[]>;
}