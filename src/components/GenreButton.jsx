

function GenreButton({value,icon,title,onChange}) {
    return(
        <button className="genre-btn" onClick={onChange}  value={value}>{icon} {title}</button>
    );
}

export default GenreButton;