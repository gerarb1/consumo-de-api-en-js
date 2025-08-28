class FakeStoreAPI {
    constructor(baseUrl = "https://fakestoreapi.com") {
        this.baseUrl = baseUrl;
    }

    async makeRequest(endpoint, options = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                headers: { "Content-Type": "application/json" },
                ...options
            });

            if (!response.ok) throw new Error(`Error: ${response.status}`);
            return await response.json();
        } catch (error) {
            console.error(error);
            throw error;
        }
    }

    getAllProducts() {
        return this.makeRequest("/products");
    }

    getProductById(id) {
        return this.makeRequest(`/products/${id}`);
    }

    getCategories() {
        return this.makeRequest("/products/categories");
    }

    getProductsByCategory(category) {
        return this.makeRequest(`/products/category/${category}`);
    }

    createProduct(product) {
        return this.makeRequest("/products", {
            method: "POST",
            body: JSON.stringify(product)
        });
    }
}
