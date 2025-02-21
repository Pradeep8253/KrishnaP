import React from 'react'
import Banner from './../../Banner/Banner';
import ProductCard from "../Pages/ProductCard" 

const AboutUs = () => {
  const breadcrumb = [
    {name: 'Home', link: '/', active: true}
]
  return (
    <div className='bg-[rgba(208,209,212,0.6)]'>
       <Banner
        title="About"
        image="https://www.saikrishnapoultry.co.in/img/slider.png"
        breadcrumbItems={breadcrumb}
      />

      <ProductCard />
     
    </div>
  )
}

export default AboutUs