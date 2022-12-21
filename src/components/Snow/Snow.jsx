import React from 'react';
import './Snow_style.css';

const Snow = () => {
    let amount = 200;
    return (
        <>
            {Array.from(Array(amount).keys()).map(i => (
                <div className="snow"/>
            ))}
        </>
    );
};

export default Snow;