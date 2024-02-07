import { RiSwordFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";
import { MdTheaterComedy } from "react-icons/md";
import { FaGhost } from "react-icons/fa";
import { FaGun } from "react-icons/fa6";
import { BsYinYang } from "react-icons/bs";

import GenreButton from "../components/GenreButton";

import "./Genre.css"

function Genre({handleSelectionInput}) {
    return(
        <div className="genre-container">
            <GenreButton 
                value= "Action"
                icon={<RiSwordFill />}
                title= "Action"
                onChange = {handleSelectionInput}
            />
            <GenreButton 
                value= "Romance"
                icon={<FaHeart />}
                title= "Romance"
                onChange = {handleSelectionInput}
            />
            <GenreButton 
                value= "Comedy"
                icon={<MdTheaterComedy />}
                title= "Comedy"
                onChange = {handleSelectionInput}
            />
            <GenreButton 
                value= "Horror"
                icon={<FaGhost />}
                title= "Horror"
                onChange = {handleSelectionInput}
            />
            <GenreButton 
                value= "Thriller"
                icon={<FaGun />}
                title= "Thriller"
                onChange = {handleSelectionInput}
            />
            <GenreButton 
                value= "Korean"
                icon={<BsYinYang />}
                title= "Korean"
                onChange = {handleSelectionInput}
            />
        </div>
    );
}

export default Genre;