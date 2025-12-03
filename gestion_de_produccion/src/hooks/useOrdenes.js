import { useState, useEffect } from "react";
import * as svc from "../services/produccionService";

export function useOrdenes(){
  const [ordenes, setOrdenes] = useState([]);
  const [loading, setLoading] = useState(false);

  async function cargar(){
    setLoading(true);
    const data = await svc.getOrdenes();
    setOrdenes(data);
    setLoading(false);
  }

  useEffect(()=>{ cargar(); }, []);

  async function agregar(orden){
    await svc.createOrden(orden);
    await cargar();
  }

  async function editar(id, orden){
    await svc.updateOrden(id, orden);
    await cargar();
  }

  async function eliminar(id){
    await svc.deleteOrden(id);
    await cargar();
  }

  // KPI basic aggregator
  function calcKPIs(){
    if(ordenes.length===0) return { total:0, critical:0, alert:0, normal:0 };
    // Paros críticos: ejemplo if oee < 0.85 -> critical; 0.85-0.9 alert; else normal
    let critical=0, alert=0, normal=0;
    ordenes.forEach(o=>{
      const oee = Number(o.oee) || 0;
      if(oee < 0.85) critical++;
      else if(oee < 0.9) alert++;
      else normal++;
    });
    return { total: ordenes.length, critical, alert, normal };
  }

  return {
    ordenes,
    loading,
    cargar,
    agregar,
    editar,
    eliminar,
    kpis: calcKPIs()
  };
}