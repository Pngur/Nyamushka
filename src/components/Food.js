import React, { useState, useReducer } from 'react';
import  './Food.scss';
import FoodList from './FoodList/FoodList';

const reducer = ( state, action ) => {
    switch(action.type) {
        case "HOVER-OUT": 
            return  state.indexOf(action.hoverOutId) !== -1 ?
            [...state] : [...state, action.hoverOutId];
        case "HOVER-IN": 
            return  state.indexOf(action.hoverInId) !== -1 ?
            [...state.filter(id => id !== action.hoverInId)] : [...state, action.hoverInId];
        default:
            return state;       
    }
};

const Food = () => {

    const [ cardsList ] = useState([  
        {
            id: '1',
            toppings: 'с фуа-гра',
            portions: 10,
            giftCounter: 1,
            weight: 0.5,
            inStock: true,
            paragraph: 'Печень утки разварная с артишоками.'
        },
        {
            id: '2',
            toppings: 'c рыбой',
            portions: 40,
            giftCounter: 2,
            weight: 2,
            inStock: true,
            paragraph: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
        },
        {
            id: '3',
            toppings: 'с курой',
            portions: 100,
            giftCounter: 5,
            weight: 5,
            inStock: false,
            paragraph: 'Филе из цыплят с трюфелями в бульоне..'
        }
    ]);
    
    const [selectedCards, setSelectedCards] = useState([]);
    const [hoverCards, dispatch] = useReducer(reducer, []);

    const selectCardHandler = cardId => {  
        setSelectedCards(prevState => prevState.indexOf(cardId) !== -1 ?
        [...prevState.filter(id => id !== cardId)] :
        [...prevState, cardId]);
    };

    const hoverOutHandler = hoverOutId => {  
        dispatch({type: "HOVER-OUT", hoverOutId:hoverOutId});
    };
        
    const hoverInHandler = hoverInId => { 
        dispatch({type: "HOVER-IN", hoverInId:hoverInId});
    };

    const wordSuffixHandler = (num, words) => (num % 10 === 1 && num % 100 !== 11 ? `1 ${words[0]}` :
        num % 10 >= 2 && num % 10 <= 4  && (num % 100 <= 10 || num % 100 >= 20) ?
        `${num} ${words[1]}` :`${num} ${words[2]}`);

    return (
        <section className='SectionFood'>
            <h1 className='SectionFood__Header'>Ты сегодня покормил кота?</h1>
            <div className='SectionFood__CardList'>
            <FoodList 
                foodcards={cardsList} 
                selected={selectedCards}
                hoverOutCard={hoverCards}
                selectedCard={selectCardHandler}
                hoverOut={hoverOutHandler}
                hoverIn={hoverInHandler}
                wordSuffix={wordSuffixHandler}/>
            </div>
        </section>
    );
};

export default Food;
