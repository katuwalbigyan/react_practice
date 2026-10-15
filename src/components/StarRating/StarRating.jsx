import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = ({ noOfStars = 5 }) => {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0)

    function handleClick(idx) {
        setRating(idx)
    }

    function handleMouseEnter(idx) {
        setHover(idx)
    }

    function handleMouseLeave() {
        setHover(rating)
    }

    return (
        <div>
            {
                [...Array(noOfStars)].map((_, index) => {
                    const star = index + 1
                    return (
                        <FaStar
                            className={star <= (hover || rating) ? "text-yellow-400" : "text-gray-300"}
                            key={star}
                            onClick={() => handleClick(index)}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        />
                    )
                })
            }
        </div>
    )
}

export default StarRating
