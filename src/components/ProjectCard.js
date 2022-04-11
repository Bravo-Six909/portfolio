import React from 'react'
import { Link } from 'react-router-dom';
import "./Card.css";
import Ripples from 'react-ripples'

const ProjectCard = (props) => {
    return (
        <>
            <div className="container">
        <Ripples color={props.color} during={1200} className="card">
                <div>
        <a href={props.url} target="_blank">
                    <img src={props.imgurl} alt="Img"></img>
                        </a>
                    <h2 style={{color:props.color}}>{props.title}</h2>
                    <p>{props.info}</p>
                    <div className="spans">
                        <span style={{ backgroundColor: props.color}}>{props.span1}</span>
                        <span style={{ backgroundColor: props.color}}>{props.span2}</span>
                        <span style={{ backgroundColor: props.color}}>{props.span3}</span>
                        {
                            !props.span4 ? <span hidden style={{ backgroundColor: props.color}}>{props.span4}</span> :
                            <span style={{ backgroundColor: props.color}}>{props.span4}</span>
                        }
                    </div>
                </div>
            </Ripples>
            </div>
        </>
    )
}

export default ProjectCard;
