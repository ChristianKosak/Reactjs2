import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import Swal from 'sweetalert2';

export const Item = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleClick = (producto) => {
    // Lógica para agregar al carrito
    agregarAlCarrito(producto);

    
    Swal.fire({
      title: '¡Producto agregado!',
      text: `${producto.nombre} se ha agregado al carrito.`,
      icon: 'success',
      confirmButtonText: 'Ok'
    });
  };

  return (
    <div className="producto">
      <img src={producto.imagen} alt={producto.nombre} />
      <h2>{producto.nombre}</h2>
      <p>${producto.precio}</p>
      <p>{producto.descripcion}</p>
      <Link to={`/item/${producto.id}`}>Ver Producto</Link>
      <button onClick={() => handleClick(producto)}>Comprar</button>
    </div>
  );
};
