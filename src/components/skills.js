import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import {Col, Container, Row} from "react-bootstrap";

import meter1 from "../assets/img/meter1.svg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png"
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };


    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Mes compétences
                            </h2>
                            <p>Voici mes principales compétences ci dessous</p>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>React js</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>Web design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>Figma</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image"/>
                                    <h5>Symfony</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image"/>
                                    <h5>E-commerce</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Shopify</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image"/>
                                    <h5>Divi - Wordpress</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} alt="Color sharp" className="background-image-left"/>
        </section>
    )
}