import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

         <div className="home__row">
          <Product
            id="12321341"
            title="Expand the Power of Your Subconcious Mind"
            price={2.00}
            rating={5}
            image="https://cdn.shopify.com/s/files/1/1581/1003/products/EPOYSM_cover_120919_2000x.jpg?v=1576110747"
          />
          <Product
            id="49538094"
            title="boAt Airdopes 611 True Wireless Earbuds"
            price={40.46}
            rating={4}
            image="https://cdn1.smartprix.com/rx-iv0Tq446u-w1200-h1200/boat-airdopes-611-tr.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Xiaomi MI Watch Lite"
            price={69.9}
            rating={4}
            image="https://cdn771.swedroid.se/wp-content/uploads/2021/02/mi-watch-lite-2-660x647.png"
          />
          <Product
            id="23445930"
            title="iPhone 12 128GB Black"
            price={849.00}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/71fVoqRC0wL._SX522_.jpg"
          />
          <Product
            id="3254354345"
            title="Fujifilm Instax Mini 11 Instant Camera (Blush Pink)"
            price={76.88}
            rating={5}
            image="https://images-static.nykaa.com/media/catalog/product/b/0/b0e1f404547410430967_rev_5.jpg?tr=w-500,pr-true"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="HP Pavilion Gaming 15-ec0026AX 15.6inch (39.62cms) Gaming Laptop (Ryzen 5 3550H/8GB/1TB HDD + 256GB SSD/Windows 10 Home/3GB NVIDIA GTX 1050 Graphics), Shadow Black"
            price={1025.28}
            rating={5}
            image="https://m.media-amazon.com/images/S/aplus-media/vc/23188df0-0fd6-4478-a244-bca629bb2ba1.__CR0,0,970,300_PT0_SX970_V1___.jpg"
          />
        </div>
      </div> 
    </div>
  );
}

export default Home;
