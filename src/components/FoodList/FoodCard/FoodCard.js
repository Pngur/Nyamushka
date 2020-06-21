import React from 'react';

import kitty from '../../../assets/cat.png';
import './FoodCard.scss';

const FoodCard = props => {

    return (

    <article className='FoodCard' 
        style={{pointerEvents: props.inStock ? 'auto' : 'none'}} 
        onMouseLeave={props.selected.find(id => id === props.id) ? () => props.hoverOut(props.id) : null}
        onMouseEnter={props.selected.find(id => id === props.id) ? () => props.hoverIn(props.id) : null}
        >
        <div className={ props.selected.find(select => select === props.id  ) &&
                      props.hoverOutCard.find(hOut => hOut === props.id) ?
                                               'FoodCard__Wrap HoverOut' :
                      props.selected.find(select => select === props.id) ?        
                                              'FoodCard__Wrap Selected ' :
                                                          !props.inStock ?
                                               'FoodCard__Wrap Disabled' :
                                                          'FoodCard__Wrap'}>
            <div className='FoodItem' 
                onClick={() => props.selectedCard(props.id)} 
                >
                <div className={ !props.inStock  ? 'FoodItem__Info Disabled' : 'FoodItem__Info'}>
                    <div className='FoodItem__Tagline'>
                    {  props.selected.find(select => select === props.id) && 
                    props.hoverOutCard.find(hOut => hOut === props.id) ?
                    <><p className='FoodItem__Tagline--Show  '>Котэ не одобряет?</p> 
                    <p className='FoodItem__Tagline--Hide  '> Сказочное заморское яство</p> </>:
                    <><p className='FoodItem__Tagline--HoverTag '>Котэ не одобряет?</p> 
                    <p className='FoodItem__Tagline--DefaultTag '>Сказочное заморское яство</p> </>
                    }
                    </div>
                    <h2 className='FoodItem__Heading'>Нямушка</h2>
                    <h3 className='FoodItem__Topping'>{props.toppings}</h3>
                    <p className='FoodItem__Portion'>{props.portions} порций</p>
                    <p className='FoodItem__Gift'>{props.giftCounter} мыши в подарок</p>
                    <p className='FoodItem__Gift'>{!props.inStock ? 'Заказчик доволен' : ''}</p>
                </div>
                <img className={!props.inStock  ? 'FoodItem__Image Disabled' : 'FoodItem__Image'} src={kitty} alt="kitty"/>
                <div className={
                    props.selected.find(select => select === props.id  ) &&
                    props.hoverOutCard.find(hOut => hOut === props.id) ?
                                        'FoodItem__Weight HoverOut' :
                    props.selected.find(select => select === props.id) ?        
                                    'FoodItem__Weight Selected ' :                          
                                                        !props.inStock ?
                                        'FoodItem__Weight Disabled' :
                                                'FoodItem__Weight'
                } >  
                    <span>{props.weight}</span>
                    <span>КГ</span>
                </div>
            </div>
        </div>
        {props.inStock && props.selected.indexOf(props.id) !== -1 ?        
        <p className='FoodCard__Paragraph'>{props.paragraph}</p> : !props.inStock ?
        <p className='FoodCard__Paragraph Disabled'>{`Печалька, ${props.toppings} закончился.`}</p> :
        <p className='FoodCard__Paragraph '>Че, ещё сидишь ? Порадуй котэ, <a href="/#" onClick={(event) => props.selectedCard(props.id, event)}>купи.</a></p>}                    
    </article> 
)};

export default FoodCard;