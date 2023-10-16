import React from 'react'
import { Container,Row,Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner=()=>{

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to Our Video Conferencing Platform</span>
                        <h5>Discover a seamless and immersive video conferencing experience like never before. Our platform is designed to connect you with friends, family, and colleagues from anywhere in the world. Whether it's a virtual team meeting, a catch-up with loved ones, or a collaborative project discussion, we've got you covered.</h5>
                        <button onClick={()=>console.log('connect')}>Create Conference<ArrowRightCircle sixe={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}