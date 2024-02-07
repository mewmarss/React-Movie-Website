import NavButton from "../components/NavButton";

import { IoSearch } from "react-icons/io5";

import "./Nav.css"

function Nav({query, handleSearchInput, handleSelectionInput}) {
    return(
        <nav>
            <div className="nav-container">
                <div className="nav-logo">
                    <h2 className="binge-logo">binge.tv</h2>
                </div>
                <div className="nav-search">
                    <input 
                        type="text"
                        value={query}
                        onChange={handleSearchInput}
                        placeholder="Search Movies & Series" 
                        className="search" 
                    />
                    <IoSearch className="search-icon" />
                </div>
                <div className="nav-btn-container">
                    <NavButton 
                        value= "Movie"
                        title= "Movies"
                        onChange = {handleSelectionInput}
                    />
                    <NavButton 
                        value= "Series"
                        title= "Series"
                        onChange = {handleSelectionInput}
                    />
                    <NavButton 
                        value= "Anime"
                        title= "Anime"
                        onChange = {handleSelectionInput}
                    />
                </div>
            </div>
        </nav>
    );
}

export default Nav;