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
                        <form action="https://formspree.io/f/xzbqpeqp" method="POST">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Votre Prénom" name="prenom" />
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="text" placeholder="Votre Nom" name="nom"/>
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="email" placeholder="Votre Email" name="email"/>
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="tel" placeholder="Votre Téléphone" name="tel"/>
                                </Col>

                                <Col>
                                    <textarea rows="6" placeholder="Message" name="message"></textarea>
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