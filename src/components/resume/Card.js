import React from 'react';
import { TbSchool, TbBriefcase } from "react-icons/tb";

const Card = (props) => {
    const iconComponent = props.category === 'education' ? <TbSchool /> : <TbBriefcase />;
    return (
        <div className="timeline-item">
            <i>{iconComponent}</i>
            <span className="timeline-date">{props.year}</span>
            <h3 className="timeline-title">{props.title}</h3>
            <p className="timeline-text">{props.description}</p>
        </div>
    )
}

export default Card;