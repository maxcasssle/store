$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

// Array of product objects
const products = [
    {
        title: 'Product 1',
        gender: 'men',
        price: '$29.99 - $25.00',
        image: './assets/sports-shoe1.jpg',
        str: './assets/str.png',
    },
    {
        title: 'Product 1',
        gender: 'men',
        price: '$29.99 - $25.00',
        image: './assets/sports-shoe1.jpg',
        str: './assets/str.png',
    },
    {
        title: 'Product 1',
        gender: 'men',
        price: '$29.99 - $25.00',
        image: './assets/sports-shoe1.jpg',
        str: './assets/str.png',
    },
    {
        title: 'Product 1',
        gender: 'men',
        price: '$29.99 - $25.00',
        image: './assets/sports-shoe1.jpg',
        str: './assets/str.png',
    },
    {
        title: 'Product 1',
        gender: 'men',
        price: '$29.99 - $25.00',
        image: './assets/sports-shoe1.jpg',
        str: './assets/str.png',
    },
    {
        title: 'Product 1',
        gender: 'men',
        price: '$29.99 - $25.00',
        image: './assets/sports-shoe1.jpg',
        str: './assets/str.png',
    },
    {
        title: 'Product 1',
        gender: 'men',
        price: '$29.99 - $25.00',
        image: './assets/sports-shoe1.jpg',
        str: './assets/str.png',
    },
    {
        title: 'Product 1',
        gender: 'men',
        price: '$29.99 - $25.00',
        image: './assets/sports-shoe1.jpg',
        str: './assets/str.png',
    },
];

// Function to create a product card
function createProductCard(product) {
    // Create the card container
    const card = document.createElement('div');
    card.className = 'product-card';

    // Create the image container
    const imgContainer = document.createElement('div');
    imgContainer.className = 'product-image';
    const img = document.createElement('img');
    img.src = product.image;
    img.alt = product.title;
    imgContainer.appendChild(img);

    // Create the product info container
    const info = document.createElement('div');
    info.className = 'product-info';

    // Add title
    const title = document.createElement('h2');
    title.className = 'product-title';
    title.textContent = product.title;
    info.appendChild(title);

    // Add description
    const description = document.createElement('p');
    description.className = 'product-description';
    description.textContent = product.description;
    info.appendChild(description);

    // Add price
    const price = document.createElement('p');
    price.className = 'product-price';
    price.textContent = product.price;
    info.appendChild(price);

    //    star image
    const str = document.createElement('img');
    str.className = 'str';
    str.src = product.str;
    info.appendChild(str);


    // Append image and info to card
    card.appendChild(imgContainer);
    card.appendChild(info);

    return card;
}

// Function to render all product cards
function renderProductCards() {
    const container = document.getElementById('product-container');
    products.forEach(product => {
        const card = createProductCard(product);
        container.appendChild(card);
    });
}

// Initialize the product cards on page load
window.onload = renderProductCards;
