import React, { useState } from "react";
import { useOrdenes } from "../../../../../../useOrdenes";
import KPIDashboard from "../components/KPIDashboard";
import OrdenTable from "../components/OrdenTable";
import OrdenForm from "../components/OrdenForm";

export default function ProduccionPage(){
  const { ordenes, loading, agregar, editar, eliminar, kpis } = useOrdenes();
  const [modalOpen, setModalOpen] = useState(false);
  const [editData, setEditData] = useState(null);

  function openNew(){
    setEditData(null);
    setModalOpen(true);
  }

  function openEdit(o){
    setEditData(o);
    setModalOpen(true);
  }

  async function saveHandler(data){
    try{
      if(data.id){
        await editar(data.id, data);
      } else {
        await agregar(data);
      }
      setModalOpen(false);
    } catch(err){
      alert("Error: " + err.message);
    }
  }

  return (
    <div className="app-wrap">
      <div className="panel">
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <h2 style={{margin:0}}>Gestión de Producción</h2>
          <div style={{display:"flex", gap:10}}>
            <button className="btn" onClick={openNew}>+ Nueva orden</button>
          </div>
        </div>

        <KPIDashboard ordenes={ordenes} />

        <div className="top-controls">
          <div style={{fontSize:13, color:"#666"}}>{loading ? "Cargando..." : `${ordenes.length} órdenes`}</div>
          <div className="search">
            <input className="input" placeholder="Buscar por ID o línea" onChange={(e)=>{
              // opcional: búsqueda local simple
              const q = e.target.value.toLowerCase();
              // no implementamos filtrado global aquí: para simplicidad, dejarlo simple
            }} />
          </div>
        </div>

        <OrdenTable
          ordenes={ordenes}
          onEdit={openEdit}
          onDelete={async (id) => {
            if(window.confirm("¿Eliminar orden "+id+"?")) await eliminar(id);
          }}
          onView={(id) => {
            const o = ordenes.find(x=>x.id===id);
            alert(JSON.stringify(o, null, 2));
          }}
        />

        <div className="legend" style={{marginTop:16}}>
          <div><span className="dot critical" />Paros críticos: <strong>{kpis.critical}</strong></div>
          <div><span className="dot alert" />Alertas: <strong>{kpis.alert}</strong></div>
          <div><span className="dot normal" />Normal: <strong>{kpis.normal}</strong></div>
        </div>
      </div>

      {modalOpen && (
        <div className="modal-backdrop">
          <OrdenForm
            initialData={editData}
            onCancel={() => setModalOpen(false)}
            onSave={saveHandler}
          />
        </div>
      )}
    </div>
  );
}