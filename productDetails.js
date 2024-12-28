const productContainer= document.getElementById('product-details')
const urlParams= new URLSearchParams(window.location.search)
const productId= urlParams.get('id')

async function productDetails() {
    try {
        const response= await fetch(`https://fakestoreapi.com/products/${productId}`)
        console.log(response)
        if(!response.ok) {
            throw new Error("Something went wrong")
        }
        const details=await response.json()
        document.getElementById("loading").style.display='none'
        displayProductDetails(details)
    }
    catch(error) {
        console.log(error)
    }
}

function displayProductDetails(details) {

    const productData=`
        <div class="col-md-6 product-image-container">
                <img src="${details.image}" class="card-img-top" height="400px" width="100px" alt="${details.title}">
            </div>
            
            <div class="col-md-6">
                <h2>${details.title}</h2>
                <p class="text-muted">${details.category}</p>
                <p>${details.description}</p>
                <h3 class="text-primary">$${details.price}</h3>
                <button class="btn btn-success">Buy Now</button>
            </div>
    `
    productContainer.innerHTML=productData
}

productDetails()

