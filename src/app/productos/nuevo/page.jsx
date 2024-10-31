"use client"
import axios from "axios";
async function guardarProducto(e){
    e.preventDefault();
    console.log("funcion guardar producto");
    const url="http://localhost:3000/productos/nuevoProducto";
    const datos={
        cantidad:document.getElementById("cantidad").value,
        nombre:document.getElementById("nombre").value,
        precio:document.getElementById("precio").value
    }
    //console.log(datos);
    
    
    const respuesta=await axios.post(url,datos);
    console.log(respuesta);
    location.replace("http://localhost:3001/productos/mostrar")
}
export default function Nuevo(){    
    return(
        <div className=" m-0 row justify-content-center">
            <form onSubmit={guardarProducto} action="" className=" col-6 mt-5" method="post">
                <div className="card">
                    <div className="card-header">
                        <h1>Nuevo Producto</h1>
                    </div>
                    <div className="card-body">
                        <input style={{height:"50px"}} className="form-control mb-3" type="text" id="cantidad" placeholder="Cantidad" autoFocus />
                        <input style={{height:"50px"}} className="form-control mb-3" type="text" id="nombre" placeholder="Nombre"  />
                        <input style={{height:"50px"}} className="form-control mb-3" type="text" id="precio" placeholder="Precio"  />
                    </div>
                    <div className="card-footer">
                        <button type="submit"  className="btn btn-primary col-12">Guardar nuevo producto</button>
                    </div>
                </div>
            </form>
        </div>
    )
}