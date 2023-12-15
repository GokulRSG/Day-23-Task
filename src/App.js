import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Header } from './Header';
import { Cart } from './Cart';

const INSTALL_PRODUCT_LIST = [{
    imgage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name :"Fancy Product",
    price : "$40.00 - $80.00",
    sales : "no"
},{
    imgage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name :"Special Item",
    price : "$18.00",
    sales : "yes",
    discount : "$20.00"
},{
    imgage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name :"Sale Item",
    price : "$25.00",
    sales : "yes",
    discount : "$50.00"
},{
    imgage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name :"Popular Item",
    price : "$40.00",
    sales : "no"
},{
    imgage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name :"Sale Item",
    price : "$25.00",
    sales : "yes",
    discount : "$50.00"
},{
    imgage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name :"Fancy Product",
    price : "$120.00 - $280.00",
    sales : "no"
},{
    imgage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name :"Special Item",
    price : "$18.00",
    sales : "yes",
    discount : "$20.00"
},{
    imgage : "https://dummyimage.com/450x300/dee2e6/6c757d.jpg",
    name :"Popular Item",
    price : "$40.00",
    sales : "no"
}
];


function App() {
    const productList = INSTALL_PRODUCT_LIST;
    const [cart, setCrt] = useState(0);

    const ProducAdd = ()=>{
        setCrt(cart+1);
        console.log(cart);
    }
  return (
    <div className="App">
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Start Bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#!">All Products</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                                <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            Cart
                            <span className="badge bg-dark text-white ms-1 rounded-pill">{cart}</span>
                        </button>
                    </form>
                </div>
            </div>
        </nav>

        {/* <!-- Header--> */}
        <Header/>
        {/* <!-- Selection --> */}
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    { productList.map((data)=>(
                    <Cart product={data} onAddCart={ProducAdd}/>
                    ))}
                </div>
            </div>
        </section>
        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
        </footer>
    </div>
  );
}

export default App;


