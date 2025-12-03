import React from "react";

function KPI({ title, value, small }){
  return (
    <div className="kpi">
      <div>
        <div className="title">{title}</div>
        <div className="value">{value}</div>
      </div>
    </div>
  );
}

export default function KPIDashboard({ ordenes }){
  // compute aggregated values
  const oeeAvg = (() => {
    const vals = ordenes.map(o => Number(o.oee) || 0);
    if(vals.length===0) return "—";
    return (vals.reduce((a,b)=>a+b,0)/vals.length*100).toFixed(0) + "%";
  })();

  // Example scrap sum per hour (sum scrap)
  const scrapSum = ordenes.reduce((s,o)=> s + (Number(o.scrap)||0), 0);

  return (
    <div>
      <div className="kpi-row">
        <KPI title="OEE Promedio" value={oeeAvg} />
        <KPI title="Órdenes" value={ordenes.length} />
        <KPI title="Scrap total ($/h)" value={`$${scrapSum}`} />
        <KPI title="Última línea" value={ordenes[0]?.linea || "—"} />
      </div>

      {/* Small legend like your image */}
      <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div style={{fontSize:13, color:"#666"}}>Sala de Control — Producción</div>
        <div className="legend">
          <div><span className="dot critical"/><span>Paros Críticos: <strong style={{marginLeft:6}}> {ordenes.filter(o => (Number(o.oee)||0) < 0.85).length}</strong></span></div>
          <div><span className="dot alert"/><span>Alertas: <strong style={{marginLeft:6}}> {ordenes.filter(o => ((Number(o.oee)||0) >= 0.85 && (Number(o.oee)||0) < 0.9)).length}</strong></span></div>
          <div><span className="dot normal"/><span>Normal: <strong style={{marginLeft:6}}> {ordenes.filter(o => (Number(o.oee)||0) >= 0.9).length}</strong></span></div>
        </div>
      </div>
    </div>
  );
}