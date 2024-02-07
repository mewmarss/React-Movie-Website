

function NavButton({value,title,onChange}) {
    return(
        <button className="nav-btn" onClick = {onChange} value={value}>{title}</button>
    );
}

export default NavButton;