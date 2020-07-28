import React from 'react';
import {Button} from 'react-bootstrap';
import CoronavirusModal from '../../Components/CoronavirusModal/CoronavirusModal';

const StoryTime = () =>{
  const [modalShow, setModalShow] = React.useState(false);

  return(
    <div className='container bg-white my-3 rounded shadow-sm pt-3'>
      <h3 className='text-center mb-4'> Story Time </h3>
      <p className='pb-4'>
      As educators and as a mom, we highly believe in the importance and benefits of reading to our tots. We’ve also seen the fruition of this consistent activity to the children in our care- it expands their vocabulary and speech, develops their imagination, creativity, and other cognitive skills. Our personal favorite is children learning to understand the world around them and growing an empathy for it. We created this class so that we can encourage our local community, both parents/caregivers and children, to have an interest in reading and immerse in its benefits. 
      </p>
      <div className='row justify-content-center pb-3'>
      <Button onClick={() => setModalShow(true)}>Sign Up!</Button>
      </div>
      <CoronavirusModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default StoryTime;