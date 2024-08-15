import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    function fetchProducts() {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((json) => {
                setProducts(json.products);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }

    return (
        <div>
            <NavBar />
            <div className="container-fluid mt-3">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-3" key={product.id}>
                            <Link
                                to="/product"
                                state={{ state: product }}
                            >
                                <div className="card shadow">
                                    <img
                                        src={product.thumbnail}
                                        className="card-img-top"
                                        alt={product.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.title}</h5>
                                        <p className="card-text">
                                            <strong>${product.price}</strong>
                                            <br />
                                            <strike>${product.originalPrice}</strike>
                                        </p>
                                        <button className="btn btn-success">
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;
