import React from 'react';
import {Card, Button} from 'react-bootstrap';
import CoronavirusModal from '../../Components/CoronavirusModal/CoronavirusModal' 


const VestibularFreePlay = () =>{
  const [modalShow, setModalShow] = React.useState(false);

  return(
    <div className='container bg-white my-3 rounded shadow-sm pt-3'>
      <h3 className='text-center mb-4'>Vestibular Free Play</h3>

      <p>
      We all know how energetic our young tots are. And in Tactile Tots, we believe that both mind and body matters! So we planned this class as an open play for mixed-aged groups wherein children have a safe outlet to release their energy and they are free to explore and use our high-quality equipment that can develop their <b>gross motor skills</b> and <b>vestibular system</b>. So come join us and get ready to move and groove!
      </p>

      <div className='row'>

        <div className='container'>
          <Card>
            <Card.Header className='text-center'>
              What are <b>Gross Motor Skills?</b>
            </Card.Header>
            <Card.Body>
            <b>Gross motor skills</b> are movements of our large muscles. It involves the coordination of our muscles and the neurological system. Why are these important for our tots? <br/><br/> The <a href='/'>Pathways Organization</a> cites these reasons: 
            <ul>
              <li>to be able to move and complete tasks independently</li>
              <li>to be able to explore the world around them which promotes cognitive, speech, and sensory development</li>
              <li>to give them confidence and independence</li>
              <li>and to possibly help prevent early motor delays and conditions that can interrupt development</li>
            </ul>
            </Card.Body>
          </Card>
        </div>

        <div className='container pt-4'>
          <Card className='text-center mb-2'>
            <Card.Header>What is the <b>Vestibular System?</b></Card.Header>
            <Card.Body>
               <blockquote className='text-left'>
                 <p>“The <b>vestibular system</b> is a sensory system that is responsible for providing our brain with information about motion, head position, and spatial orientation; it also is involved with motor functions that allow us to keep our balance, stabilize our head and body during movement, and maintain posture. Thus, the vestibular system is essential for normal movement and equilibrium.”
                 </p>
                 <footer className='blockquote-footer text-right'> Dr. Marc Dingman <cite title='Source Title' className='text-bold'><b>Your Brain, Explained</b></cite></footer>
                 </blockquote>
            </Card.Body>
          </Card>
          </div>
      </div> 
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

export default VestibularFreePlay;