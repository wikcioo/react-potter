import React from "react";
import { Link } from "react-router-dom";

const Character = ({ name, actor, house, patronus, image }) => {
    return (
        <article className="character">
            <div className="img-container">
                <img src={image} alt={name} />
            </div>
            <div className="character-footer">
                <h3>{name}</h3>
                <h4>{actor}</h4>
                <p>{house}</p>
                <Link
                    to={`/character/${name}`}
                    className="btn btn-primary btn-details"
                >
                    details
                </Link>
            </div>
        </article>
    );
};

export default Character;
