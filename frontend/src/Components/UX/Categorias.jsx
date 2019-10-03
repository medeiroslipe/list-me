import React from 'react'
import './Categorias.css'
import KA from '../../assets/imgs/ka3.png'
import KAsedan from '../../assets/imgs/kasedan3.png'
import { Container, Col, Row, Image } from 'react-bootstrap'

export default props => (

    <Container >
        <Row>
        <Col xs={3} md={2} className="divCat">
        <Image src={KA} rounded className="img"/>
        <h1>What is Lorem Ipsum?</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </Col>

        <Col xs={3} md={2} className="divCat">
        <Image src={KAsedan} rounded className="img"/>
        <h1>Titulo</h1>
        <p>Este vai ser o texto mostrado</p>
        </Col>

        <Col xs={3} md={2} className="divCat">
        <Image src={KA} rounded className="img"/>
        <h1>Titulo</h1>
        <p>Este vai ser o texto mostrado</p>
        </Col>
        
    </Row>
    </Container>
)
