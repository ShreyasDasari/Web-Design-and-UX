import React from "react";
import Card from "react-bootstrap/Card";
import { Container, Row, Col, Image } from 'react-bootstrap';

const Cards = (props) => {
    return(
        <Container className="mt-4 mx-auto">
            <Row className="mt-4 mx-auto">
                {props.info.map((item)=>{
                    return (
                        <Col className="mt-4"  key={item.title}>
                            <Card style={{width: "23rem"}}>
                                <Card.Img as={Image} src={item.image} fluid={true} style={{width: "200px", height:"200px"}} className="mx-auto mt-4" alt="Job Image" />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>{item.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Cards;