import React from 'react'
import './Comparation.css'
import { Container, Row, Col } from 'react-bootstrap'
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ZoomOutMapIcon from '@material-ui/icons/ZoomOutMap';
import BuildIcon from '@material-ui/icons/Build';





export default props => 
<section className="sec">


<Container className=" container mt-4" >
  <Row>
    <Col>
        <div className="mb2">
            <center> <LocalAtmIcon/></center>
            <h1 >Economia</h1>
            <p>Os melhores valores estão aqui, carros novos e bem aceitos</p>
        </div>    
    </Col>
    <Col>
        <div className="mb2">
             <center><ZoomOutMapIcon/></center>
            <h1 >KM Livre</h1>
            <p>Km liberado para alcançar seus sonhos, não trabalhamos com limite de km rodado ao mês</p>
        </div>    
    </Col>
    <Col>
        <div className="mb2">
            <center><BuildIcon/></center>
            <h1>Manutenção</h1>
            <p>A Manutenção preventiva fica por nossa conta</p>
        </div>    
    </Col>
  </Row>


  
</Container>

</section>

