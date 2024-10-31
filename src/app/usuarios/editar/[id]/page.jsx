'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

async function nuevoUsuario(e, { params, nombre, usuario, password }) {
    e.preventDefault();
    const url = `http://localhost:3000/usuarios/editarUsuario/${params.id}`;
    const datos = { nombre, usuario, password };
    try {
        const respuesta = await axios.put(url, datos);
        if (respuesta.status === 200) {
            window.location.replace("/usuarios/mostrar");
        }
    } catch (error) {
        console.error("Error al editar el usuario:", error);
    }
}

export default function Nuevo({ params }) {
    const [usuarios, setUsuarios] = useState({
        nombre: "",
        usuario: "",
        password: ""
    });

    useEffect(() => {
        async function fetchUserData() {
            try {
                const response = await fetch(`http://localhost:3000/usuarios/buscarPorId/${params.id}`);
                if (response.ok) {
                    const text = await response.text();
                    const data = text ? JSON.parse(text) : {};
                    setUsuarios(data);
                } else {
                    console.error("Error al obtener los datos del usuario");
                }
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        }
        fetchUserData();
    }, [params.id]);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setUsuarios((prev) => ({ ...prev, [id]: value }));
    };

    return (
        <div className="m-0 row justify-content-center">
            <form className="col-6 mt-5" onSubmit={(e) => nuevoUsuario(e, { params, ...usuarios })}>
                <div className="card">
                    <div className="card-header">
                        <h1>Editar el usuario: {usuarios.nombre}</h1>
                    </div>
                    <div className="card-body">
                        <input id="nombre" placeholder="Nombre" autoFocus className="form-control mb-3" type="text" value={usuarios.nombre} onChange={handleChange} />
                        <input id="usuario" placeholder="Usuario" className="form-control mb-3" type="text" value={usuarios.usuario} onChange={handleChange} />
                        <input id="password" placeholder="Password" className="form-control mb-3" type="text" value={usuarios.password} onChange={handleChange} />
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-danger col-12 mt-3 mb-3" type="submit">Guardar usuario</button>
                    </div>
                </div>
            </form>
        </div>
    );
}
