import React, { useState } from 'react';
import './Portfolio.css';
import WorkItems from './WorkItems';
import WorkItemCard from './WorkItemCard';

export default function Portfolio() {
    const [items, setItems] = useState(WorkItems);
    const [active, setActive] = useState('All');

    const filterItems = (itemCategory) => {
        if (!itemCategory) {
            // If no category is provided, show all items
            setItems(WorkItems);
            setActive('All');
        }
        else {
            // Filter items based on the selected category
            const selectedCategoryItems = WorkItems.filter((item) => item.category === itemCategory);
            setItems(selectedCategoryItems);
            setActive(itemCategory);
        }
    }
    return (
        <section className="work container section" id="Projects">
            <h2 className="section-title">Recent Works</h2>
            <div className="work-filters ">
                <span className={`work-item ${active === 'All' ? 'active-title' : ''}`} onClick={() => filterItems()}>All Work</span>
                <span className={`work-item ${active === 'Fullstack' ? 'active-title' : ''}`} onClick={() => filterItems("Fullstack")}>Full-Stack </span>
                <span className={`work-item ${active === 'Other' ? 'active-title' : ''}`} onClick={() => filterItems("Other")}>Other</span>
            </div>

            <div className="work-items work-container grid">
                {items.map((item) => {
                    const { id, image, category, title, link } = item;
                    return (
                        <WorkItemCard key={id} img={image} category={category} title={title} link={link} />
                    );
                })}
            </div>
        </section>
    )
}