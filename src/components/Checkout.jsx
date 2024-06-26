import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/config";
import Swal from 'sweetalert2';

export const Checkout = () => {

    const { carrito, calcularTotal, vaciarCarrito } = useContext(CartContext);
    const { register, handleSubmit } = useForm();
    let [docId, setDocId] = useState("");

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: calcularTotal(),
            fecha: Timestamp.now(),
        }
        
        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setDocId(doc.id);
                vaciarCarrito();
            })
    }

    if (docId) {
        return (
            <><div className= "formulario">
                <h1>Gracias por confiar en nosotros!</h1>
                <h2>De 3 a 5 dias habiles estara llegando tu pedido</h2>
                <p>El seguimiento se puede hacer con este numero: {docId}</p>
                </div>
            </>
        )
    }

  return (
    <div className="form-container">
        <form className="formulario" onSubmit={handleSubmit(comprar)}>
            <h1 className= "main-title"> Ingresa tus datos </h1>
            <input type="text" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <input type="email" placeholder="Ingresá tu e-mail" {...register("email")} />
            <input type="phone" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <button className="enviar" type="submit">Comprar</button>

        </form>
    </div>
  )
}
