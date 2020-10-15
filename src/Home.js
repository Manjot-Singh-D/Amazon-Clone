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
      <Product
        id="123123123"
        title="The lean startup: How Constant Innovation Creates the nature and hence changes its funtionality by changing the moods of the individual person"
        price={11.96}
        rating={4}
        image="https://m.media-amazon.com/images/I/81Vzm0NAr8L._AC_UY327_FMwebp_QL65_.jpg"
      />
    </div>
  );
}

export default Home;
