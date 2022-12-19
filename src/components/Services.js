import {Container} from "react-bootstrap";

export const Services = () => {
    return(
        <Container id="services">
            <h2 className="text-center pt-5">Services</h2>
            <p className="text-center p-serv">
                Voici mes services proposez si vous avez une demande en particulier <a href="mailto:jeremyrossi123@gmail.com">Contactez-moi</a>
                <br/>
                Le devis n'est pas facturé
            </p>
            <div className="container-serv align-items-center">
                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Site web</h3>
                            <p>Envie d'un site web sur mesure, un site e-commerce ou même un site rapide et plus économique <br/> N'hesitez pas</p>
                            <a href="#contact">Contactez-moi</a>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="box">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Web Design</h3>
                            <p>Pour un nouveau logo, un maquettage de site web ou bien un design en particulier</p>
                            <a href="#contact">Contactez-moi</a>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}