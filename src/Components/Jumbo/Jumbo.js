import React from 'react';
import {Jumbotron, Button} from 'react-bootstrap'
import './Jumbo.css'

const Jumbo = () =>{
  return(
    <Jumbotron className='text-center mb-0'>
      <h1 className='text-white'>Tactile Tots</h1>
      <p className='text-white'>
        Early Childhood Education and Multi-Sensory Studio
      </p>
    </Jumbotron>
  )
}

export default Jumbo