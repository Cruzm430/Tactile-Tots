import React from 'react';

import { faTwitter, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'

const Footer = () =>{
  return(
    <footer className='bg-light text-center h-100 pb-1'>

      <h3 className='py-3'><b>Follow Us!</b></h3>
      <div>
        <a href='/' className='px-4'>
          <FontAwesomeIcon size='2x' icon={faTwitter}/>
        </a>
        <a href='/' className='px-4'>
          <FontAwesomeIcon size='2x' icon={faFacebookF}/>
        </a>
        <a href='/' className='px-4'>
          <FontAwesomeIcon size='2x' icon={faInstagram}/>
        </a>
      </div>
      <h6 className='my-4'> 2020 by Tactile Tots NJ</h6>

    </footer>
  )
}

export default Footer