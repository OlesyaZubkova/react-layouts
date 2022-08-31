import React from "react";
import ShopCard from "./ShopCard";

function CardView(props) {
    const {cards} = props;
    
    return (
    <div className='cards'>
        {cards.map((card, index) => {
            return <ShopCard card={card} key={index} /> 
        })}
    </div>
    );
}

export default CardView;
