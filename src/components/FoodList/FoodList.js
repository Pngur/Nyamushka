import React from 'react';
import PropTypes from "prop-types";
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
                
                selectedCard={() => props.selectedCard(card.id)}
                hoverIn={props.hoverIn}
                hoverOut={props.hoverOut}
                hoverOutCard={props.hoverOutCard}
                selected={props.selected}
                wordSuffix={props.wordSuffix}
                mouseLeave={props.selected.find(id => id === card.id) ? () => props.hoverOut(card.id) : null}
                mouseEnter={props.selected.find(id => id === card.id) ? () => props.hoverIn(card.id) : null}/>
    ));

    return (
        <>{foodCards}</>
    );
};

FoodList.propTypes = {
    selectedCard: PropTypes.func.isRequired,
    hoverIn: PropTypes.func.isRequired,
    hoverOut: PropTypes.func.isRequired,
    selected: PropTypes.array.isRequired,
 };

export default FoodList;
