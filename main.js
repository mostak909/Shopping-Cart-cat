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

    })


    function cartNumbers() {
        let productNumbers = localStorage.getItem('cartNumbers');

        productNumbers = parseInt(productNumbers);

        if (productNumbers) {

            localStorage.setItem('cartNumbers', productNumbers + 1);
            //document.querySelectorAll('.cart').textContent = productNumbers + 1;

        } else {

            localStorage.setItem('cartNumbers', 1);
            document.querySelectorAll('.cart span').textContent = 1;


        }

    }

}