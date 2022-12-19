import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"

export const Contact = () => {



    return (
        <section className="contact" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Contactez-moi</h2>
                        <form>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Votre Prénom" />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Votre Nom" />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="email" placeholder="Votre Email" />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="tel" placeholder="Votre Téléphone"/>
                                </Col>

                                <Col>
                                    <textarea rows="6" placeholder="Message" ></textarea>
                                    <button type="submit"><span>Envoyer</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}