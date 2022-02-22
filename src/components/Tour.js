import React from 'react'

const Tour = ({tour, onDelete}) => {
    return (
        <article className='single-tour'>
            <img src={tour.image} alt={tour.name}/>
            <footer>
                <div className='tour-info'>
                    <h4>{tour.name}</h4>
                    <h4 className='tour-price'>${tour.price}</h4>
                </div>
                <p>
                    {tour.info}
                </p>
                <button className='delete-btn' onClick={() => onDelete(tour.id)}>Not Interested</button>
            </footer>
        </article>
    )
}

export default Tour;