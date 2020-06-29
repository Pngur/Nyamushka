import React from 'react';

import kitty from '../../../assets/cat.png';
import './FoodCard.scss';

const FoodCard = props => (
    <article className='FoodCard' 
        style={{pointerEvents: props.inStock ? 'auto' : 'none'}} 
        onMouseLeave={props.mouseLeave}
        onMouseEnter={props.mouseEnter}>
        <div className={ 
            props.hoverOutCard.includes(props.id) ?
                        'FoodCard__Wrap HoverOut' :
                props.selected.includes(props.id) ?        
                       'FoodCard__Wrap Selected ' :
                                        !props.inStock ?
                            'FoodCard__Wrap Disabled' :
                                    'FoodCard__Wrap'}>
            <div className='FoodItem' onClick={ props.selectedCard}>
                <div className={ !props.inStock  ? 'FoodItem__Info Disabled' : 'FoodItem__Info'}>
                    <div className='FoodItem__Tagline'>
                        {props.hoverOutCard.includes(props.id) ?
                        <><p className='FoodItem__Tagline--Show  '>Котэ не одобряет?</p> 
                        <p className='FoodItem__Tagline--Hide  '> Сказочное заморское яство</p> </>:
                        <><p className='FoodItem__Tagline--HoverTag '>Котэ не одобряет?</p> 
                        <p className='FoodItem__Tagline--DefaultTag '>Сказочное заморское яство</p> </>}
                    </div>
                    <h2 className='FoodItem__Heading'>Нямушка</h2>
                    <h3 className='FoodItem__Topping'>{props.toppings}</h3>
                    <p className='FoodItem__Portion'>{props.wordSuffix(props.portions, ['порция', 'порции', 'порций'])}</p>
                    <p className='FoodItem__Gift'> {props.wordSuffix(props.giftCounter, ['мышь', 'мыши', 'мышей']) } в подарок</p>
                    <p className='FoodItem__Gift'>{!props.inStock ? 'Заказчик доволен' : ''}</p>
                </div>
                <img className={!props.inStock  ? 'FoodItem__Image Disabled' : 'FoodItem__Image'} src={kitty} alt="kitty"/>
                <div className={
                    props.hoverOutCard.includes(props.id) ?
                              'FoodItem__Weight HoverOut' :
                        props.selected.includes(props.id) ?        
                              'FoodItem__Weight Selected' :                          
                                           !props.inStock ?
                              'FoodItem__Weight Disabled' :
                                       'FoodItem__Weight'}>  
                    <span>{props.weight}</span>
                    <span>КГ</span>
                </div>
            </div>
        </div>
        {props.selected.includes(props.id) ?
        <p  className='FoodCard__Paragraph'> {props.paragraph}</p> : 
                                                     !props.inStock ? 
        <p className='FoodCard__Paragraph Disabled'> {`Печалька, ${props.toppings} закончился.`} </p> : 
        <p className='FoodCard__Paragraph'> Чё, ещё сидишь ? Порадуй котэ,  <span className="Button" onClick={props.selectedCard} > купи. </span></p>}
      
    </article>
);

export default FoodCard;