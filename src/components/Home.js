import React from 'react';
import "./Home.css";
import Product from "./Product";

export default function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image"
                src="https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d5a969f2dedcb0008e06e29%2F0x0.jpg"
                 alt="home page"
                />

                <div className="home__row">
                    <Product
                    id="12321341"
                    title="Leave the World Behind"
                    price={10.75}
                    rating={5}
                    image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1609266429-leave-the-world-behind-1609266421.jpg?crop=1xw:1xh;center,top&resize=480:*"
                  />
                    <Product
                   id="49538094"
                    title="Kenwood Mixer"
                     price={305.0}
                     rating={4}
                     image="https://cdn.shopify.com/s/files/1/0104/9211/7092/products/appliances-wonderchef-vietri-mixer-grinder-blue-500w-9991160987748_600x.jpg?v=1584610967"
                     />
                
          <Product
            id="4903850"
            title="Apple Bluetooth Smartwatch"
            price={199.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71fwbMm1NBL._AC_SL1500_.jpg"
          />
          </div>
          <div className="home__row">
          <Product
            id="23445930"
            title="Google Home"
            price={129.35}
            rating={5}
            image="https://cdn.pocket-lint.com/r/s/1200x/assets/images/139617-smart-home-review-google-home-review-image1-sro7ez6pkl.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro"
            price={598.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
          />
        
        
          <Product
            id="90829332"
            title="Amstrad 43 Smart LED TV"
            price={1200.99}
            rating={4}
            image="https://www.sathya.in/Media/Default/Thumbs/0034/0034850-amstrad-43-am43fhsa-full-hd-smart-led-tv.jpg"
          />
          </div>
        </div>
        </div>
    )
}
