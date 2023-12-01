import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          At
          <span className="text-primeColor font-semibold text-lg"> ABHISTORE</span>{" "}
          , we curate timeless fashion, combining quality, style, and affordability. Our passion for delivering iconic looks drives us to offer a wide range of products, from clothing and accessories to home goods. We are committed to providing a seamless shopping experience, reflecting the global trends that define classic style. Join us in celebrating fashion's ever-evolving journey, where you can find your unique expression of worldwide cool.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300 mt-2">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
