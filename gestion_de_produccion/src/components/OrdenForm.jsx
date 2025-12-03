import React, { useState, useEffect } from "react";

export default function OrdenForm({ initialData, onCancel, onSave }) {
  const [form, setForm] = useState({
    id: "",
    fecha: "",
    linea: "",
    cantidadPlaneada: 0,
    cantidadProducida: 0,
    estado: "en proceso",
    responsable: "",
    oee: 0.9,
    takt: "",
    scrap: 0
  });

  useEffect(()=>{
    if(initialData) setForm({...initialData});
  },[initialData]);

  function updateField(e){
    const { name, value } = e.target;
    setForm(prev => ({...prev, [name]: name==="oee" ? Number(value) : (name==="cantidadPlaneada"||name==="cantidadProducida"||name==="scrap" ? Number(value) : value) }));
  }

  function submit(e){
    e.preventDefault();
    // Validaciones básicas
    if(!form.linea || !form.fecha) return alert("Rellena línea y fecha");
    if(form.cantidadPlaneada < 0 || form.cantidadProducida < 0) return alert("Cantidades positivas");
    // oee debe estar entre 0 y 1
    if(form.oee < 0 || form.oee > 1) return alert("OEE entre 0 y 1 (ej. 0.87)");
    onSave(form);
  }

  return (
    <form className="modal" onSubmit={submit}>
      <h3>{form.id ? "Editar orden" : "Nueva orden"}</h3>
      <div className="form-row">
        <div className="field">
          <label>Fecha</label>
          <input name="fecha" type="date" value={form.fecha} onChange={updateField} />
        </div>
        <div className="field">
          <label>Línea</label>
          <input name="linea" type="text" value={form.linea} onChange={updateField} />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Cantidad planeada</label>
          <input name="cantidadPlaneada" type="number" value={form.cantidadPlaneada} onChange={updateField} />
        </div>
        <div className="field">
          <label>Cantidad producida</label>
          <input name="cantidadProducida" type="number" value={form.cantidadProducida} onChange={updateField} />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Estado</label>
          <select name="estado" value={form.estado} onChange={updateField}>
            <option value="en proceso">En proceso</option>
            <option value="completada">Completada</option>
            <option value="detenida">Detenida</option>
          </select>
        </div>
        <div className="field">
          <label>Responsable</label>
          <input name="responsable" type="text" value={form.responsable} onChange={updateField} />
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>OEE (0 - 1)</label>
          <input name="oee" type="number" step="0.01" value={form.oee} onChange={updateField} />
        </div>
        <div className="field">
          <label>Scrap ($/h)</label>
          <input name="scrap" type="number" value={form.scrap} onChange={updateField} />
        </div>
      </div>

      <div style={{display:"flex", justifyContent:"flex-end", gap:10, marginTop:8}}>
        <button type="button" onClick={onCancel} className="input">Cancelar</button>
        <button type="submit" className="btn">{form.id ? "Guardar" : "Crear"}</button>
      </div>
    </form>
  );
}