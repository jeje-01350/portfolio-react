import {Col} from "react-bootstrap";

export const ProjectCard = ({title, desc, imgUrl}) => {
    return (
        <Col sm={12} md={6}>
            <div className="proj-imgbx">
                <img src={imgUrl} alt="Image projet"/>
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{desc}</span>
                </div>
            </div>
        </Col>
    )
}