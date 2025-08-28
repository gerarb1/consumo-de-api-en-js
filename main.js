const api = new FakeStoreAPI();
let currentProducts = [];

// Mostrar productos en la interfaz
function displayProducts(products) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = products.map(product => `
        <div class="product">
            <h3>${product.title}</h3>
            <p><strong>Precio:</strong> $${product.price}</p>
            <p><strong>Categoría:</strong> ${product.category}</p>
            <p>${product.description}</p>
            <img src="${product.image}" width="100">
        </div>
    `).join('');
}

// Mostrar estadísticas
function updateStats(products) {
    const statsDiv = document.getElementById('stats');
    if (!products.length) {
        statsDiv.innerHTML = "<p>No hay productos cargados.</p>";
        return;
    }
    const avgPrice = (products.reduce((sum, p) => sum + p.price, 0) / products.length).toFixed(2);
    statsDiv.innerHTML = `
        <p>Total de productos: ${products.length}</p>
        <p>Precio promedio: $${avgPrice}</p>
    `;
}

// Acciones de botones
async function getAllProducts() {
    const products = await api.getAllProducts();
    currentProducts = products;
    displayProducts(products);
    updateStats(products);
}

async function getProductById() {
    const id = document.getElementById('productId').value;
    if (!id) return alert("Por favor ingrese un ID válido");
    const product = await api.getProductById(id);
    displayProducts([product]);
}

async function getProductsByCategory() {
    const category = document.getElementById('categorySelect').value;
    if (!category) return alert("Seleccione una categoría");
    const products = await api.getProductsByCategory(category);
    currentProducts = products;
    displayProducts(products);
    updateStats(products);
}

// Manejo de formulario para crear producto
document.getElementById('createProductForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const newProduct = {
        title: document.getElementById('newProductTitle').value,
        price: parseFloat(document.getElementById('newProductPrice').value),
        description: document.getElementById('newProductDescription').value,
        category: document.getElementById('newProductCategory').value,
        image: document.getElementById('newProductImage').value
    };
    const created = await api.createProduct(newProduct);
    alert(`Producto creado con ID: ${created.id}`);
});

// Cargar categorías al inicio
window.addEventListener('DOMContentLoaded', async () => {
    const categories = await api.getCategories();
    const select = document.getElementById('categorySelect');
    select.innerHTML = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');
});
