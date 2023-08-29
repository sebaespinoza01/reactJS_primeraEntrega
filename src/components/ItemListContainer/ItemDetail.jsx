import PropTypes from "prop-types";  // Importa PropTypes correctamente

const ItemDetail = ({ item, isLoading }) => {
    if (isLoading){
        return <h2>Cargando...</h2>
    }
    if (!item) {
        return <h2>Product no found</h2>;
    }
    return (
        <div>
            <h1>{item.name}</h1>
            <p>${item.price}</p>
            <p>{item.category}</p>
        </div>
    );
};

ItemDetail.propTypes = {  // Utiliza PropTypes con mayúscula
    item: PropTypes.object,
    isLoading: PropTypes.bool,
};

export default ItemDetail;
