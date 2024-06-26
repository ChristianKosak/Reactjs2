import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

export const ItemDetail = ({ producto }) => {
    const { agregarAlCarrito } = useContext(CartContext);

    const handleAgregarAlCarrito = () => {
        agregarAlCarrito(producto);
        Swal.fire({
            title: '¡Producto agregado!',
            text: `${producto.nombre} ha sido agregado al carrito.`,
            icon: 'success',
            confirmButtonText: 'Ok'
        });
    };

    return (
        <div className="productos-grilla">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <h2>${producto.precio}</h2>
            <p>{producto.descripcion}</p>
            <button onClick={handleAgregarAlCarrito}>Comprar</button>
        </div>
    );
};
