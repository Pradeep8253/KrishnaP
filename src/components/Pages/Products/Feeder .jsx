import React from 'react'
import ProductCard from "../ProductCard"
import Banner from '../../../Banner/Banner';

const Feeder  = () => {

  const breadcrumb = [{ name: "Home", link: "/", active: true }];
return (
  <Banner
    title="Feeder"
    image="https://www.poultrytrends.in/wp-content/uploads/2023/02/Feed-Refusal-pic--750x350.jpg"
    breadcrumbItems={breadcrumb}
  />
);
}

export default Feeder 