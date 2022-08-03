import React from 'react';
import { useHistory } from 'react-router-dom';

const Tour = ({ tour: { _id, title, image, description, price } }) => {
    const history = useHistory();
    return (
        <div className="col">
            <div className="card h-100">
                <img src={image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                    <h6>${price}</h6>
                </div>
                <div className="card-footer">
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => history.push(`/booktour/${_id}`)}
                    >
                        Book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tour;
