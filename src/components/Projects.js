import projImg1 from "../assets/img/project-img1.png"
import projImg2 from "../assets/img/project-img2.png"
import projImgCS from "../assets/img/project-img-cs.jpg"
import ColorSharp2 from "../assets/img/color-sharp2.png"
import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import 'animate.css'
import TrackVisibility from "react-on-screen";

export const Projects = () => {

    const projects = [
        {
            title: "BjTechnoDev",
            desc: "Site pour ma startup",
            imgUrl: projImg1,
        },
        {
            title: "Plomb'elec Distribution",
            desc: "Site e-commerce pour une boutique de plomberie et électricité",
            imgUrl: projImg2,
        },
        {
            title: "MgFast73",
            desc: "Site de reparateur de motos",
            imgUrl: projImgCS,
        },
        {
            title: "L'arganier",
            desc: "Site e-commerce pour une boutique de mobilier marocains",
            imgUrl: projImgCS,
        },
    ]

    return(
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projets</h2>
                                    <p>Listes de mes projets dont ceux en cours de réalisation</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab Three</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>

                                <Tab.Pane eventKey="second" className="text-center">Projet a venir</Tab.Pane>
                                <Tab.Pane eventKey="third" className="text-center">Projet a venir</Tab.Pane>

                            </Tab.Content>

                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img src={ColorSharp2} alt="ColorSharp2" className="background-image-right"/>
        </section>
    )
}