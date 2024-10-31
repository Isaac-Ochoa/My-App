"use client"
import axios from "axios";

 async function guardarUsuario(e){
 e.preventDefault();
 console.log("funcion guardar usuario");
 const url="http://localhost:3000/ventas/nuevaVenta"
 const data={
    idUsuario:document.getElementById("idUsuario").value,
    idProducto:document.getElementById("idProducto").value,
    fecha:document.getElementById("fecha").value,
    hora:document.getElementById("hora").value,
    estatus:document.getElementById("estatus").value
 }
 //console.log(datos);
 
 const respuesta= await axios.post(url,data);
 console.log(respuesta);
 location.replace("http://localhost:3001/ventas/mostrar")
 
 
}
export default function Nuevo (){
    return (
        <div className="m-0 row row-justify-contebt">
            <form onSubmit={guardarUsuario} action="" className="col-6 mt-5" >
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo usuario</h1>
                    </div>
                    <div className="car-body">
                        <input style={{height:"70px"}} className="form-control mb-3" type="text" id="idUsuario" placeholder="idUsuario" autoFocus />
                        <input style={{height:"70px"}} className="form-control mb-3" type="text" id="idProducto" placeholder="idProducto" />
                        <input style={{height:"70px"}} className="form-control mb-3" type="text" id="fecha" placeholder="fecha" />
                        <input style={{height:"70px"}} className="form-control mb-3" type="text" id="hora" placeholder="hora" />
                        <input style={{height:"70px"}} className="form-control mb-3" type="text" id="estatus" placeholder="estatus" />
                    </div>
                    <div className="card-footer">
                        <button type="submit" style={{height:"50px"}} className="btn btn-primary col-12">Guardar usuario</button>
                    </div>
                </div>
            </form>
        </div>
    )
}