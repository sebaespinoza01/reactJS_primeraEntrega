import PropTypes from "prop-types";  // Importa PropTypes correctamente
import { Card } from "react-bootstrap";

const ItemDetail = ({ item, isLoading, addItem }) => {
    if (isLoading){
        return <h2>Cargando...</h2>
    }
    if (!item) {
        return <h2>Product no found</h2>;
    }
    return (
        <Card>
            <Card.Img variant="top" src={`../src/assets/${item.imageId}`} alt={item.title} />

            <Card.Body>
                <h1 className="card-title">{item.title}</h1>
                <p className="card-text">{item.description}</p>
                <p className="card-text">Precio: ${item.price}</p>
                <p className="card-text">Categoría: {item.categoryId}</p>
                <p className="card-text">Stock Disponible: {item.stock}</p>
                <button onClick={() => addItem(item, 1)}>Agregar al carrito</button>
            </Card.Body>
        </Card>
    );
};

ItemDetail.propTypes = {  // Utiliza PropTypes con mayúscula
    item: PropTypes.object,
    isLoading: PropTypes.bool,
    addItem: PropTypes.func,
};

export default ItemDetail;
