import axios from "axios";
import Boton from "@/components/ventas/boton";
import Editar from "@/components/ventas/editar";

async function getVentas(){
   const url="http://localhost:3000/ventas/mostrarVentas";
   const ventas = await axios.get(url);
   return ventas.data;
}
export default async function Noticias(){
    var ventas = await getVentas();
       
    return(
        <div>
        <h1> Ventas </h1>
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th></th>
                    <th>idUsuario</th>
                    <th>idProducto</th>
                    <th>fecha</th>
                    <th>hora</th>
                    <th>estatus</th>
                    <th>editar</th>
                    
                    
                </tr>
            </thead>
            <tbody>
                {
                    ventas.map((venta,i)=>(
                        <tr key="{i}">
                            <td>{i+1}</td>
                            <td>{venta.id}</td>
                            <td>{venta.idUsuario}</td>
                            <td>{venta.idProducto}</td>
                            <td>{venta.fecha}</td>
                            <td>{venta.hora}</td>
                            <td>{venta.estatus}</td>
                            
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <Boton />
        </div>
    );
}