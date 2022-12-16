import React from 'react';
import active from './starFull.png';
import inactive from './starEmpty.png';

function Rating({ rating, setRatingSearch }) {
    let arr = [...Array(6).keys()].slice(1);
    return (
        <div className="starz">
            {
                arr.map( el => <img src={el <= rating ? active : inactive} id={el} key={el} alt={el <= rating  ? 'activeStar' : 'inActiveStar'} onClick={() => setRatingSearch(el)} />)
            }
        </div>
    )
}

Rating.defaultProps = {
    setRatingSearch: () => { },
    rating: 1,
};

export default Rating;