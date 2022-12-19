import {Col, Container, Row} from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg"
import navIcon2 from "../assets/img/nav-icon2.svg"

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6}>
                        <span className="logo">JEREMY</span>
                    </Col>

                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/jeremy-rossi-277717200/"><img src={navIcon1} alt="icon"/></a>
                            <a href="https://www.instagram.com/jeje01350/"><img src={navIcon2} alt="icon"/></a>
                        </div>
                        <p>&copy; 2022. All right reserved</p>
                    </Col>

                </Row>
            </Container>
        </footer>
    )
}