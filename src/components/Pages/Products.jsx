import React from 'react'
import Banner from '../../Banner/Banner'
import ProductCard from "../Pages/ProductCard"
const Products = () => {
    const breadcrumb = [
        {name: 'Home', link: '/', active: true}
    ]
  return (
    <>
      <Banner
        title="Our Products"
        image="https://www.saikrishnapoultry.co.in/img/slider.png"
        breadcrumbItems={breadcrumb}
      />
      <ProductCard />
    </>
  );
}

export default Products