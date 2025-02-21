import React from 'react'
import Banner from './../../Banner/Banner';

const AboutUs = () => {
  const breadcrumb = [
    {name: 'Home', link: '/', active: true}
]
  return (
    <div className='bg-[rgba(0,15,52,0.6)]'>
       <Banner
        title="About"
        image="https://www.saikrishnapoultry.co.in/img/slider.png"
        breadcrumbItems={breadcrumb}
      />
     
    </div>
  )
}

export default AboutUs