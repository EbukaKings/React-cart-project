import NavBar from "../components/NavBar";
import { useEffect, useState } from "react";

function Home() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetchProducts();
        const cartFromLocal = localStorage.getItem("cart");
        if (cartFromLocal) {
            setCart(JSON.parse(cartFromLocal));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    function fetchProducts() {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                if (data.products && Array.isArray(data.products)) {
                    setProducts(data.products);
                } else {
                    console.error("Invalid products data:", data);
                    setProducts([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
                setProducts([]);
            });
    }

    function addToCart(item) {
        setCart(prevCart => {
            // Check if the item already exists in the cart
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                return prevCart; // Return previous cart if item already exists
            }
            const updatedCart = [...prevCart, item];
            return updatedCart; // Update state with new cart
        });
    }

    return (
        <div>
            <NavBar cart={cart.length} />
            <div style={{ marginTop: '80px' }} className="container-fluid mt-10">
                <div className="row">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div className="col-md-3" key={product.id}>
                                <div className="card shadow">
                                    <img
                                        src={product.images}
                                        className="card-img-top"
                                        alt={product.title}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{product.name}</h5>
                                        <p className="card-text">
                                            <strong>${(product.price).toFixed(2)}</strong>
                                        </p>
                                        <button className="btn btn-success" onClick={() => addToCart(product)}>
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Home;
