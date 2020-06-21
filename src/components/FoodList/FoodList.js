import React from 'react';
import PropTypes from "prop-types";

import './FoodList.scss';
import FoodCard from './FoodCard/FoodCard';


const FoodList = props => {
    
    let foodCards = props.foodcards.map( card => (
            <FoodCard
                key={card.id}
                id={card.id}
                toppings={card.toppings}
                portions={card.portions}
                giftCounter={card.giftCounter}
                weight={card.weight}
                inStock={card.inStock}
                paragraph={card.paragraph}
                
                selectedCard={props.selectedCard}
                hoverIn={props.hoverIn}
                hoverOut={props.hoverOut}
                hoverOutCard={props.hoverOutCard}
                selected={props.selected}
            />
    ));

    return (
        <>
          {foodCards}
        </>
    );
};

FoodList.propTypes = {
    selectedCard: PropTypes.func.isRequired,
    hoverIn: PropTypes.func.isRequired,
    hoverOut: PropTypes.func.isRequired,
    selected: PropTypes.array.isRequired,
 };



export default FoodList;