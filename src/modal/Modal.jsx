import "./Modal.css"

function Modal({image,title,rating,genre,releaseDate,description,cast,onClose}) {

    const handleClose = () => {
        onClose();
    }

    return(
        <div className="modal-container">
            <div className="modal">
                <div className="modal-top">
                    <h2>{title}</h2>
                    <button onClick={handleClose} className="close-btn">X</button>
                </div>
                <div className="modal-content">
                    <div className="modal-img">
                        <img src={image} alt={title} className="modal-img"/>
                    </div>
                    <div className="modal-info">
                        <p>Genre: {genre}</p>
                        <p>Rating: {rating}</p>
                        <p>Released On: {releaseDate}</p>
                        <p>Cast: {cast.join(" , ")}</p>
                        <p>Summary: <br/> {description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal