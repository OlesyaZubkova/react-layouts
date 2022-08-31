import React from "react";

function ShopItem(props) {
    const {name, price, color, img} = props.item;
    
    return (
    <div className="card_list">
        <div className="card_image">
            <img src={img} alt={name}></img>
        </div>
            <h3 className="card_title">{name}</h3>
            <div className="card_description">{color}</div>
            <div className="card_price">${price}</div>
            <div className="card_button">
                <button className="button_confirm">Add to cart</button>
            </div>
    </div>
    )
}

export default ShopItem;