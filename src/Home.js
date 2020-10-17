import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/TheGentlemen/GENTL_2020_GWBleedingHero_FT_COVIDUPDATE_XSite_1500X600_PV_en-GB._CB404268992_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="123123123"
          title="Protein"
          price={60.54}
          rating={5}
          image="https://m.media-amazon.com/images/I/41-OVEhvBtL.__AC_SY400_.jpg"
        />
        <Product
          id="123123123"
          title="Printer"
          price={20.96}
          rating={4}
          image="https://m.media-amazon.com/images/I/31LDF8ccgJL.__AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123123123"
          title="Tredmill"
          price={118.96}
          rating={5}
          image="https://m.media-amazon.com/images/I/411lay0O64L.__AC_SY400_.jpg"
        />
        <Product
          id="123123123"
          title="Clock"
          price={5.0}
          rating={3}
          image="https://m.media-amazon.com/images/I/518Lfu-dA3L.__AC_SY400_.jpg"
        />
        <Product
          id="123123123"
          title="Mop"
          price={10.6}
          rating={2}
          image="https://m.media-amazon.com/images/I/41fh5Gqh4cL.__AC_SY400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="123123123"
          title="Couch"
          price={15.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/41cDJCiO6TL.__AC_SY400_.jpg"
        />
      </div>
    </div>
  );
}
export default Home;
