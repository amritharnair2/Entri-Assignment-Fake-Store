const productContainer = document.getElementById("product-container")

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            throw new Error("Something went wrong")
        }
        const products = await response.json()
        document.getElementById("loading").style.display='none'
        displayProducts(products)

    }
    catch (error) {
        console.log(error)
    }
}

function displayProducts(products) {
    products.forEach((product) => {
        let productCard = `
            <div class="col-lg-3 col-md-4 d-flex">
            <div class="card">
                <div class="d-flex justify-content-center align-items-center">
                    <img src=${product.image} class="card-img-top" alt=${product.title}>
                </div>
                <div class="card-body">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text text-muted">${product.description.slice(0,100)}...</p>
                  <div class="d-flex justify-content-between align-items-center mt-auto">
                    <span class="fw-bold">$${product.price}</span>
                    <a href="productDetails.html?id=${product.id}" class="btn btn-sm btn-primary">View Details</a>
                  </div>  
                </div>
              </div>
        </div>
        `
        productContainer.innerHTML+=productCard   
       
    });
}

fetchProducts()