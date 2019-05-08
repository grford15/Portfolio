import React from 'react'; 
import {  Row, Col, Button, Thumbnail } from 'react-bootstrap';

const Project = (props) => {
    

    return(
        <div>
            {props.projects.map(project => {
                return (
                    <Row className="thumbnails" key={project.id}>
                        <Col xs={12} sm={10} className="image-wrapper">
                        <Thumbnail src={project.image} bsClass="thumbnail">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="btn-links">
                            <p><Button bsStyle="info" href={project.github}>Github Link</Button></p>
                            <p><Button bsStyle="success" href={project.link}>Website Link</Button></p>
                        </div>
                        </Thumbnail>
                        </Col>
                    </Row>
                )
            })}
        </div>
    )
}
export default Project;