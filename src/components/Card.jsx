import React from 'react'
import CardButton from './CardButton';

const Card = ({title, subText}) => {
    //logic
    
    //view
    return (
        <div className='card'>
            <h5 className='card-title'>{title}</h5>
            <p className={"card-title"}>
                {subText}
            </p>
            <CardButton />
        </div>
    )
}

export default Card