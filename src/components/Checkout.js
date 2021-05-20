import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
  const [{ basket, user }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://emailtuna.com/images/newsletter/179/179b8328d3e959f1b428ae67ec2547bf.jpg"
          //src="https://www.wondersmind.com/img/offer-banner.png"
          alt=""
        />
        {
          basket?.length===0?(
            <div>
              <h2>Your Shopping Cart is Empty</h2>
              <p>
                You have no item in your Cart.To buy one or more item add item to the Cart
                </p>
            </div>
          ):(
          
        <div>
          <h3>{user?.email}</h3>
          <h2 className="checkout__title">Your shopping Cart</h2>

          {basket.map(item => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
  
        </div>
          )}
      </div>
    

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;