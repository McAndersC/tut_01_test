const products = {

    /*
    
        Template til ét produkt.
    
    */
    tmpl : (producObj) => `<div class="product-item">
        <h2 class="product-item-title">${producObj.name}</h2>
        <img class="product-item-image" src="${producObj.image}">
        ${producObj.discount ? `<span class="product-item-discount">${producObj.discount}</span>` : ''}
        <p>${producObj.description}</p>
    </div>`,

    /*
    
        Metode vi kalder for igangsætte scriptet.
    
    */
    show : () => {

        // Henter vi vores dom elementer
        const productsList = document.querySelector('#products-list');
        const productsListAll = document.querySelector('#products-list-all');

        // Her benytter vi Fetch API´et.
        // Api Live : 'https://api.webmcdm.dk/tuts/01/products'
        // Api Lokalt: '/data/products.json'

        fetch('https://api.webmcdm.dk/tuts/01/products').then(response => response.json()).then((response) => {

            let productResultAll = response;
            let productResultFiltered = response.filter((product) => product.show);

            /* 
            
                Henter alle produkter og udskriver til "products-list-all"

            */
            if(productsListAll) {

                productResultAll.map((product) => {

                    productsListAll.insertAdjacentHTML('beforeend', products.tmpl(product))
                    
                })

            }

            /* 
            
                Henter udvalgte produkter og udskriver til "products-list"

            */
            if(productsList) {

                productResultFiltered.map((product) => {

                    productsList.insertAdjacentHTML('beforeend', products.tmpl(product))
                    
                })

            }
          

        })



    }

}


products.show();