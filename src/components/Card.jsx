import React from 'react'

const Card = ({title = "박성민", subText=""}) => {
    //logic
    return (
        <div className='card'>
            <h5>{title}</h5>
            <p>
                {subText}
            </p>

            <button type="button" className='card-button'>Go somewhere</button>


        </div>
    )
}

export default Card