import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./app.css";

// Importing local images
import pasta from "./pasta.jpg"
import pizza from "./pizza.jpg"
import bug from "./burger.jpg"

const App = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    // Instead of fetching from API, we directly set the local foodItems
    const localFoodItems = [
      { id: 1, name: 'Pizza', price: 10, image: pizza },
      { id: 2, name: 'Burger', price: 5, image: bug },
      { id: 3, name: 'Pasta', price: 8, image: pasta },
    ];
    setFoodItems(localFoodItems);
  }, []);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Food Ordering Website</h1>
      {!isCheckout ? (
        <div>
          <h2 className="mb-3">Menu</h2>
          <div className="row">
            {foodItems.map((item) => (
              <div className="col-md-4 mb-4" key={item.id}>
                <div className="card h-100">
                  <img
                    src={item.image}
                    className="card-img-top"
                    alt={item.name}
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">Price: ${item.price}</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => addToCart(item)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="mt-4">Cart</h2>
          {cart.length > 0 ? (
            <ul className="list-group">
              {cart.map((item, index) => (
                <li className="list-group-item" key={index}>
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">Your cart is empty</p>
          )}
          <button
            className="btn btn-success mt-3"
            onClick={handleCheckout}
            disabled={cart.length === 0}
          >
            Proceed to Checkout
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h2>Checkout</h2>
          <p>Your total is: ${cart.reduce((acc, item) => acc + item.price, 0)}</p>
          <p className="text-success">Dummy Payment Page: Payment Successful!</p>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Order Again
          </button>
        </div>
      )}
    </div>
  );
};

export default App;