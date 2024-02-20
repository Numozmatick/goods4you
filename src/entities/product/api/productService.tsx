import DummyProductService from "../../../shared/api/services/product.dummy.service";
import {IProductService} from "../types/product.types";


class ProductService implements IProductService {
    private apiService: IProductService;

    constructor() {
        this.apiService = new DummyProductService();
    }

    async getAllProducts() {
        return this.apiService.getAllProducts();
    }

    async getProductCategories(){
        const categories = await this.apiService.getProductCategories();
        return categories.map(category=>({label: category, value: category}));
    }

    async getProductsByCategory(category, limit, skip) {
        return this.apiService.getProductsByCategory(category, limit, skip);
    }

    async getLimitedProducts(limit, skip, select) {
        return this.apiService.getLimitedProducts(limit, skip, select);
    }

    async searchProducts(query) {
        return this.apiService.searchProducts(query);
    }

    async getProductById(id) {
        return this.apiService.getProductById(id);
    }
}

export default ProductService;