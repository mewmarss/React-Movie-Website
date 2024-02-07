import Card from "../components/Card";

import "./Show.css"

import data from "../db/data"

function Show({result}) {
    return(
        <div className="show-container">
            {result}
        </div>
    );
}

export default Show;