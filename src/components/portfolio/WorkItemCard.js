import React from 'react';

export default function WorkItemCard(prop) {
    return (
        <div className="work-card" key={prop.id}>
            <a href={prop.link} target="_blank" rel="noreferrer" className="work-link">
                <div className="work-thumbnail">
                    <img src={prop.img} alt="" className="work-img" />
                    <div className="work-mask"></div>
                </div>
                <span className="work-category"></span>
                <h3 className="work-title">{prop.title}</h3>
            </a>
        </div>
    )
}
