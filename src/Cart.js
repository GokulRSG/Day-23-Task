export function Cart({ product, onAddCart }) {
    let rating = <div></div>;
    let sale = <div></div>;
    let btnText = <button className="btn btn-outline-dark mt-auto"
        onClick={() => onAddCart(product)}>Add to cart</button>;
    if (product.name === "Special Item" || product.name === "Popular Item") {
        rating = <div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
        </div>;
    }
    if (product.sales == "yes") {
        sale = <div class="badge bg-dark text-white position-absolute sale-icon">Sale</div>;
    }
    if (product.name == "Fancy Product") { btnText = <button className="btn btn-outline-dark mt-auto">View options</button>; }
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {/* <!-- Sale badge--> */}
                {sale}
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={product.imgage} alt="..." />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">{product.name}</h5>
                        {/* <!-- Product reviews--> */}
                        {rating}
                        {/* <!-- Product price--> */}
                        <span className="text-muted text-decoration-line-through">{product.discount}</span>
                        {" " + product.price}
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">{btnText}</div>
                </div>
            </div>
        </div>
    );
}
