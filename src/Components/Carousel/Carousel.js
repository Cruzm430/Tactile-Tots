import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import TT1 from './TT1.jpg'
import TT2 from './TT2.jpg'
import TT3 from './TT3.jpg'
import './Carousel.css'

const WelcomeCarousel = () =>{
   return(
     <div id='carousel' className='container'>

    <Carousel className='justify-content-center'>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={TT1}
        alt="First slide"
      />
      <Carousel.Caption style={{right:0,bottom:0,left:0,top:0}}>
        <h3> </h3>
        <p> </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={TT2}
        alt="Third slide"
      />
  
      <Carousel.Caption style={{right:0,bottom:0,left:0,top:0}}>
        <h3> </h3>
        <p> </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100 h-100"
        src={TT3}
        alt="Third slide"
      />
  
      <Carousel.Caption style={{right:0,bottom:0,left:0,top:0}}>
        <h3> </h3>
        <p> </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
     </div>
   )
 }

 export default WelcomeCarousel