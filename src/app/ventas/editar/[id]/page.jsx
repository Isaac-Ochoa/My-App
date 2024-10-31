'use client'
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

async function editarVentas(e, {estatus}) {
    e.preventDefault();
    const url = `http://localhost:3000/ventas/editarVenta/${estatus.id}`;
    const datos = { estatus }; // Envía solo el estatus
    await axios.put(url, datos);
    window.location.replace("/ventas/mostrar");
}

export default function Nuevo({ params }) {
    

    const [ventas, setVentas] = useState({
        estatus: '' // Nuevo campo estatus
    });


    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={(e) => editarVentas(e, { estatus: ventas.estatus, id: params.id })}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar el estatus de la venta</h1>
                    </div>
                    <div className="card-body">
                        <input id="estatus" placeholder="Estatus" autoFocus className="form-control mb-3" type="text" value={ventas.estatus} onChange={handleChange} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger col-12 mt-3 mb-3" type="submit">Guardar cambios</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
