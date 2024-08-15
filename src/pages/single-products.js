import NavBar from "../components/NavBar";
import { useLocation } from "react-router-dom";

function SingleProduct(props) {
    const location = useLocation();
    const product = location.state.state;
    

    
    return (
        <div>
            <NavBar/>
            <div id="demo" className="carousel slide mt-4" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1" ></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2" ></button>
                </div>
                <div className="carousel-inner bg-dark">
                    {product.images.map((image, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? "active" : ""}`}
                        >
                            <img
                                src={image}
                                alt={`Slide ${index}`}
                                className="d-block"
                                style={{ height: "300px", width: "100%" }}
                            />
                        </div>
                    ))}
                </div>
                <div>
                {/* Add controls if needed */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                <h2>{product.title}</h2>
                <h1>{product.title}</h1>
                <div className="btn btn-success">Add to Cart</div>
                <p>{product.description}</p>
            </div>
        </div>
    );
}

export default SingleProduct;
