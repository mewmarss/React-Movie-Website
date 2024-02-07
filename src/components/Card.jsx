import { useState } from "react";
import Modal from "../modal/Modal";

import { FaStar } from "react-icons/fa";

function Card({img,title,rating,genre,releaseDate,description,cast}) {

    const [showModal, setShowModal] = useState(false)

    const handleModalDisplay = () => {
        setShowModal(true)
    }

    const handleModalClose = () => {
        setShowModal(false)
    }

    return(
        <>
        <div className="card" key={Math.random()} onClick={handleModalDisplay}>
            <img src={img} alt={title} className="card-img"/><br />
            <h2 className="card-title">{title}</h2>
            <p className="card-rating"><FaStar className="rating-star"/> {rating}</p>
        </div>
        {showModal && 
            <Modal 
                image = {img} 
                title = {title} 
                rating = {rating}
                genre = {genre}
                releaseDate = {releaseDate}
                description = {description}
                cast = {cast}
                onClose = {handleModalClose}
            />
        }
        </>
    );
}

export default Card;