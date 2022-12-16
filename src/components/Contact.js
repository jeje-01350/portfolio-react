import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg"
import {response} from "express";

export const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        setButtonText('Envoie en cours...')

        let reponse = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json;charset=utf-8"
            },
            body: JSON.stringify(formDetails)
        });

        setButtonText("Envoyer")
        let result = response.json()
        setFormDetails(formInitialDetails)

        if (result.code === 200) {
            setStatus({ success: true, message: 'Message bien envoyé'})
        } else {
            setStatus({ success: false, message: 'Une erreur est survenue, Veuillez réessayer plus tard'})
        }
    }

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Us"/>
                    </Col>
                    <Col md={6}>
                        <h2>Contactez-moi</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="Votre Prénom" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.lastName} placeholder="Votre Nom" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Votre Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="tel" value={formDetails.phone} placeholder="Votre Téléphone" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>

                                <Col>
                                    <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>

                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.success === false ? 'danger': 'success'}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}