import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles.css";

const Home = () => {
  const navigate = useNavigate();
  const [products] = useState([
    { id: 1, name: "Nike Shoes", price: "$120", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Adidas Sneakers", price: "$100", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Puma T-shirt", price: "$40", image: "https://via.placeholder.com/150" },
    { id: 4, name: "Ray-Ban Sunglasses", price: "$90", image: "https://via.placeholder.com/150" },
  ]);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (!loggedInUser) {
      navigate("/signin");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    alert("You have been logged out!");
    navigate("/signin");
  };

  return (
    <div className="home-container">
      <div className="navbar">
        <h1>Retail Store</h1>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="products-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
