import React from 'react';
import './Resume.css';
import Data from './Data';
import Card from './Card';


export default function Resume() {
    return (
        <section className="resume container section" id="Experience">
            <h2 className="section-title">Experience</h2>
            <div className="resume-container grid">
                <div className="timeline grid">
                    {Data.map((val, id) => {
                        return val.category === "education" ? (
                            <Card key={id} icon={val.icon} category={val.category} title={val.title} year={val.year} description={val.description} />
                        ) : null;
                    })}

                </div>
                <div className="timeline grid">
                    {Data.map((val, idx) => {
                        return val.category === "experience" ? (
                            <Card key={idx} icon={val.icon} category={val.category} title={val.title} year={val.year} description={val.description} />
                        ) : null;
                    })}

                </div>
            </div>
        </section>
    )
}
