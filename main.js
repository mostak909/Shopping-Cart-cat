var carts = document.querySelectorAll('.add-cart');
let product = [{
        name: 'Lovely Cat 1',
        tag: 'lovely1',
        price: 300,
        inCart: 0
    },
    {
        name: 'Lovely Cat 2',
        tag: 'lovely2',
        price: 350,
        inCart: 0
    },
    {
        name: 'Lovely Cat 3',
        tag: 'lovely3',
        price: 400,
        inCart: 0
    },
    {
        name: 'Lovely Cat 4',
        tag: 'lovely4',
        price: 450,
        inCart: 0
    },
    {
        name: 'Lovely Cat 5',
        tag: 'lovely5',
        price: 500,
        inCart: 0
    },
    {
        name: 'Lovely Cat 6',
        tag: 'lovely6',
        price: 550,
        inCart: 0
    }
]

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        cartNumbers();
        totalCost(product[i]);
    })

    function onLoadCartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        if (productNumbers) {
            document.querySelector('.cart span').textContent = productNumbers;

        }
    }


    function cartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');
        productNumbers = parseInt(productNumbers);
        if (productNumbers) {
            localStorage.setItem('cartNumbers', productNumbers + 1);
            document.querySelector('.cart span').textContent = productNumbers + 1;
        } else {
            localStorage.setItem('cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;
        }
    }
}


function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');


    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost', cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price)
    }

}






onLoadCartNumbers();
displayCart();

//  products container

function displayCart() {
    let cartItems = localStorage.getItem('ProductsInCart');
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector('.products');

    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += productContainer;



        });

    }
}


//  products container end