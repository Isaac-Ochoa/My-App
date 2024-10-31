"use client"
import EditarUsuario from "@/components/usuarios/editar";
import BorrarUsuario from "@/components/usuarios/borrar";
import Boton from "@/components/usuarios/boton";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Usuarios() {
    const [usuarioss, setUsuarioss] = useState([]);

    const getUsuarios = async () => {
        const url = "http://localhost:3000/usuarios/";
        const response = await axios.get(url);
        setUsuarioss(response.data); // Actualiza el estado con los usuarios
    };

    useEffect(() => {
        getUsuarios(); // Cargar usuarios al montar el componente
    }, []);

    return (
        <div>
            <h1>Usuarios</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nombre</th>
                        <th>usuario</th>
                        <th>Editar</th>
                        <th>Borrar</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarioss.map((usuario) => (
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td> 
                            <td>{usuario.nombre}</td> 
                            <td>{usuario.usuario}</td> 
                            <td>
                                <EditarUsuario id={usuario.id}/>
                            </td>
                            <td>
                                <BorrarUsuario id={usuario.id}/>
                            </td>
                        </tr>
                    ))
                }
             </tbody>
            </table>
            <Boton/>
        </div>
    );
}