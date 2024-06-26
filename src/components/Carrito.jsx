import React, { Fragment, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Carrito = () => {
  const { carrito, calcularTotal, vaciarCarrito, eliminarProducto } = useContext(CartContext);

  const handleEliminarProducto = (producto) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `¿Quieres eliminar ${producto.nombre} del carrito?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        eliminarProducto(producto);
        Swal.fire('¡Eliminado!', `${producto.nombre} ha sido eliminado del carrito.`, 'success');
      }
    });
  };

  return (
    <div className="carrito">
      <h1>Carrito de Compras</h1>
      {carrito.length > 0 ? (
        <>
          {carrito.map((prod) => (
            <div className="producto-carrito" key={prod.id}>
              <h2>{prod.nombre}</h2>
              <p>Precio: ${prod.precio}</p>
              <button onClick={() => handleEliminarProducto(prod)}>❌</button>
            </div>
          ))}
          <div className="total-container">
            <h2>Total: ${calcularTotal()}</h2>
            <button className="vaciar-btn" onClick={vaciarCarrito}>Vaciar carrito</button>
            <Link className="finalizar-btn" to="/finalizar-compra">Finalizar compra</Link>
          </div>
        </>
      ) : (
        <div className="carrito-vacio">
          <h2>¡Tu carrito está vacío!</h2>
          <p>¿Por qué no añades algunos productos?</p>
          <Link className="comprar-btn" to="/">Seguir comprando</Link>
        </div>
      )}
    </div>
  );
};

export default Carrito;
