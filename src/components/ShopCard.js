import React from "react";

function ShopCard(props) {
    const {name, price, color, img} = props.card;
    const {card} = props;
    console.log('card info ', card);
    
    return (
      <div className='card'>
        <header className='card_header'>
            <h3 className='card_title'>{name}</h3>
            <div className='card_description'>{color}</div>
        </header>
        <div className='card_image'>
            <img src={img} alt={name}></img>
        </div>
        <footer className='card_footer'>
            <span className='card_price'>${price}</span>
            <button className='button_confirm'>Add to cart</button>
        </footer>
        </div>
        )
    }

    export default ShopCard;