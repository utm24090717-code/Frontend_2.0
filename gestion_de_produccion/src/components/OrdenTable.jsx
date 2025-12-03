import React from "react";

export default function OrdenTable({ ordenes, onEdit, onDelete, onView }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Fecha</th>
            <th>Línea</th>
            <th>Planeado</th>
            <th>Producido</th>
            <th>OEE</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {ordenes.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.fecha}</td>
              <td>{o.linea}</td>
              <td>{o.cantidadPlaneada}</td>
              <td>{o.cantidadProducida}</td>
              <td>{ (Number(o.oee) * 100 || 0).toFixed(0) }%</td>
              <td>
                <span className={`chip ${
                  o.estado === "en proceso" ? "status-enproceso" : 
                  o.estado === "completada" ? "status-completada" : "status-detenida"
                }`}>{o.estado}</span>
              </td>
              <td className="actions">
                <button className="edit" onClick={()=>onEdit(o)}>Editar</button>
                <button className="delete" onClick={()=> {
                  if(window.confirm("¿Eliminar orden?")) onDelete(o.id);
                }}>Eliminar</button>
                <button onClick={()=>onView(o.id)}>Ver</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}