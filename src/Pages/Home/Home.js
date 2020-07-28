import React from 'react';
import WelcomeCarousel from '../../Components/Carousel/Carousel'
import ClassCards from '../../Components/ClassCards/ClassCards'
import Pricing from '../Pricing/Pricing'

const Home = () =>{
  return (
    <div className='container py-4'>

    <div className='album py-3 bg-light rounded my-4'>
      <div className='container'>
        <h1 className='text-center'>Play, Explore, Learn!</h1>
        <div className='row py-4'>
          <div className='col w-100'>
            <WelcomeCarousel/>
          </div>
          <div className='col'>

          <h4 className='text-center'>Welcome to our Studio!</h4>

          <p className='text-left mr-3 pt-2'>
          Tactile Tots is a local play-based studio focusing on multisensory stimulation for babies and toddlers ages 6 months to 3 years old. We are committed in providing explorative and age-appropriate activities for your little tots!
          </p>

          <p className='text-left mr-3'>
          Our mission is to offer the young children in our community an avenue to develop meaningful understanding of the world around them by using their five senses: sight, smell, hearing, touch, and taste.
          </p>


          </div>
        </div>
      </div>
    </div>
    <ClassCards/>
    <Pricing/>
    </div>
  )
}

export default Home