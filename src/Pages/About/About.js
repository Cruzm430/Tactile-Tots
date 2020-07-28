import React from 'react';
import pic from './AebAes.jpg';

const About = () =>{
  return(
    <div className='container'>
      <div className='container pt-1 my-4 rounded shadow-sm bg-white'>
        <h4 className='text-center my-4'>
          Meet the Team
        </h4>
        <div className='container text-center pb-4'>
            <p className='text-left'>
            Adrienne and Andre are sisters and founders of Tactile Tots, LLC. They graduated with a Bachelor’s in Early childhood education. 
            </p>
            <p className='text-left'>
            What began as simple and recurring conversations about the lack of sensory-based programs in the town they live in and observations on the need for it, Tactile Tots was created! 
            </p>
        </div>
      </div>
      <div className='container pt-1 my-4 rounded shadow-sm bg-white'>
        <h4 className='text-center my-4'>
         Our Values
        </h4>
        <div className='container pb-4'>
        <ul>
          <li><span>Child Safety-</span><br/>
          In our studio, the children’s health and safety are one of our major priorities. We aim to provide age-appropriate, quality materials, and equipment that are thoroughly cleaned and sanitized for everyone’s well-being.</li><br/>
          <li><span>Parent/ Caregiver Involvement-</span><br/>
          In all of our classes, we encourage parent/caregiver involvement. During the early childhood years, it has been proven that a trusted adult’s active involvement has great benefits to children: cognitively, mentally, and emotionally. We invite you to pull up your sleeves, loosen up, and enjoy these special activities with your little tots!</li><br/>
          <li>
            <span>Comunity- </span>
            Being a locally owned studio in Bayonne, NJ, we want to create a safe and loving community for children to help further develop their critical sense of belongingness.
          </li>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default About