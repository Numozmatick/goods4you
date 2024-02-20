import {IProductService} from "../../../entities/product/types/product.types";

class DummyProductService implements IProductService{
    apiUrl
    constructor(apiUrl = 'https://dummyjson.com/products') {
        this.apiUrl = apiUrl;
    }

    getAllProducts() {
        return fetch(`${this.apiUrl}`)
            .then(res => res.json());
    }

    getProductById(id) {
        return fetch(`${this.apiUrl}/${id}`)
            .then(res => res.json());
    }

    searchProducts(query) {
        return fetch(`${this.apiUrl}/search?q=${query}`)
            .then(res => res.json());
    }

    getLimitedProducts(limit, skip, select) {
        return fetch(`${this.apiUrl}?limit=${limit}&skip=${skip}&select=${select}`)
            .then(res => res.json());
    }

    getProductCategories() {
        return fetch(`${this.apiUrl}/categories`)
            .then(res => res.json());
    }

    getProductsByCategory(category, limit, skip) {
        return fetch(`${this.apiUrl}/category/${category}?limit=${limit}&skip=${skip}`)
            .then(res => res.json());
    }

    addProduct(product) {
        return fetch(`${this.apiUrl}/add`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then(res => res.json());
    }

    updateProduct(id, product) {
        return fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product),
        })
            .then(res => res.json());
    }

    deleteProduct(id) {
        return fetch(`${this.apiUrl}/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json());
    }
}

export default DummyProductService;
