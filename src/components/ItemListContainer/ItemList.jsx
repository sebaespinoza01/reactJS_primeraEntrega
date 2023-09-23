import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

const ItemList = ({ items, }) => {
    return(
        <div>
            <h1>ItemList</h1>
            <Link to="/checkout"> finalizar compra</Link>
            <ul>
                {items.map((item) =>(
                    <li key={item.id}>
                        <Link to={`/item/${item.id}`}>
                        <h3>{item.title}</h3>
                        <p>{item.price}</p>
                        <p>{item.categoryId}</p>
                        <p>{item.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

ItemList.propTypes = {
    items: propTypes.array.isRequired,
    isLoading: propTypes.bool,
};

export default ItemList;