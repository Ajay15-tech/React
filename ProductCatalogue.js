const products = [
    { id: 1, name: "Laptop", price: "$1200", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Smartphone", price: "$800", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Headphones", price: "$150", image: "https://via.placeholder.com/150" },
];

function ProductCatalogue() {
    return ( <
        div className = "page" >
        <
        h1 > Product Catalogue < /h1> <
        div className = "product-list" > {
            products.map((product) => ( <
                div key = { product.id }
                className = "product-card" >
                <
                img src = { product.image }
                alt = { product.name }
                /> <
                h3 > { product.name } < /h3> <
                p > { product.price } < /p> <
                /div>
            ))
        } <
        /div> <
        /div>
    );
}

export default ProductCatalogue;