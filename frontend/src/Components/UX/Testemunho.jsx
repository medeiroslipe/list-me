import React from 'react'
import { Container , Carousel} from 'react-bootstrap'
import img1 from '../../assets/imgs/ka.jpeg'
import img2 from '../../assets/imgs/kasedan.jpeg'

export default props => (
    <Container>
    <Carousel>
  <Carousel.Item>
    <img
      className="d-block"
      src={img1}
      alt="First slide"
      
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
    
</Carousel>

<Carousel>
<Carousel.Item>
    <img
      className="d-block"
      src={img2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  </Carousel>
</Container>
)