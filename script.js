const getProductsButton = document.getElementById('btn');


const productsContainer = document.getElementById('container');


getProductsButton.addEventListener('click', async () => {

    try {
        const data = await fetch('https://fakestoreapi.com/products');
        const response = await data.json();

        console.log(response);


        response.forEach((product) => {
           
            productsContainer.innerHTML += 
                    `
                    <div class='w-25 shadow-lg p-5 border m-3' >
                        <div class='text-center mb-5' >
                            <img height='100px' src="${product.image}"  alt='product-image'/>
                            <h2 class='rounded mt-2 bg-success text-white' >Price : $${product.price} </h2>
                        </div>
                        <div>
                            <h4 class='rounded text-info' >Category : ${product.category} </h4>
                            <h4>Rating : ${product.rating.rate} </h4>
                        </div>
                        <div>
                            <p> About : ${product.description} </p>
                        </div>
                    </div>`

        })

        

    } catch (error) {
        console.log(error);
    }


 
})