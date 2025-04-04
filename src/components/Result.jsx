import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function Result({ recipeName, recipeLink, filter1, filter2, filter3, description, imageUrl,recipeIngredients}) {
    const filters = [filter1, filter2, filter3].filter(Boolean); 

    return (
        <Link 
            to={{
                pathname: "/recipe",
            }} 
            state={{ recipeName, recipeLink, filters, description, imageUrl, recipeIngredients }}
            className="result-container"
            style = {{textDecoration: 'none', color: '#333'}}
            
        >
            <div className="result-left">
                <h1>{recipeName}</h1>
                <div className="result-filters">
                    <h4>{filter1}</h4>
                    <h4>{filter2}</h4>
                    <h4>{filter3}</h4>
                </div>
            </div>
            <div className="result-right">
                <img 
                    src={imageUrl || "https://uptownprinters.ca/assets/no_image_placeholder.png"} 
                    alt={recipeName} 
                    style={{ width: '100%', height: 'auto' }} 
                />
            </div>
        </Link>
    );
}

Result.propTypes = {
    recipeName: PropTypes.string.isRequired,
    recipeLink: PropTypes.string.isRequired,
    filter1: PropTypes.string,
    filter2: PropTypes.string,
    filter3: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
    recipeIngredients: PropTypes.arrayOf(PropTypes.string)
};

export default Result;