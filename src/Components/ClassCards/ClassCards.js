import React from 'react';
import {Card, Button} from 'react-bootstrap';

const ClassCards = () =>{
  return(
    <div className='album py-3'>
      <div className='container bg-light py-3 my-3 rounded text-center'>
        <h3 className='my-3'><a href='/'>Sensory Play Groups</a></h3>
          <p>Our Sensory Play Groups offer hands on, thematic and multi sensory activities for your tots! We aim to expose children to various textures and materials so they can freely explore using their senses which helps in their brain development, creativity and self-discovery. We have four classes to cater to different age groups and to create safe spaces that support each child’s engagement and overall well-being. </p>
        <div className='row pt-2'>
          <div className='col'>
            <Card className='shadow text-center bg-light mb-4 shadow-sm w-20 rounded'>
              <Card.Header>6 - 12 Month Olds</Card.Header>
              <Card.Body className='text-center'>
              <p>What We Are Working On: Exposure to variety to materials and textures, Movement, Object Permanence, Object Manipulation, Understanding Cause and Effect
              </p>
              <Button>Button</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col'>
            <Card className='shadow text-center bg-light mb-4 shadow-sm w-20 rounded'>
              <Card.Header>13 - 18 Month Olds</Card.Header>
              <Card.Body className='text-center'>
              <p>What We Are Working On: Exposure to variety to materials and textures, Independence on mobility, Spatial Awareness, Following simple directions, Basic Language
              </p>
              <Button>Button</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='row'>
        <div className='col'>
            <Card className='shadow text-center bg-light mb-4 shadow-sm w-20 rounded'>
              <Card.Header>19 - 26 Month Olds</Card.Header>
              <Card.Body className='text-center'>
              <p className='mb-4 pb-3'>Exposure to variety to materials and textures Language development, Fine motor development, Individuality, Social Cues
              </p>
              <Button>Button</Button>
              </Card.Body>
            </Card>
          </div>
          <div className='col'>
            <Card className='shadow text-center bg-light mb-4 shadow-sm w-20 rounded'>
              <Card.Header>2 - 3 Year Olds </Card.Header>
              <Card.Body className='text-center'>
              <p>Exposure to variety to materials and textures, Pretend Play, Increased fine motor skills, Belongingness, Self regulation, Labeling big feelings, Simple math concepts
              </p>
              <Button>Button</Button>
              </Card.Body>
            </Card>
          </div>
          </div>
      </div>
    </div>
  )
}

export default ClassCards