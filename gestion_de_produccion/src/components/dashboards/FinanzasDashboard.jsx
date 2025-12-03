import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboards.css";

export default function FinanzasDashboard() {
  return (
    <div className="dash-container">
      <img src={logo} alt="logo" className="dash-logo" />

      <div className="dash-card">
        <h2 className="dash-title">DASHBOARD DE FINANZAS / CONTROL DE GESTIÓN</h2>

        <div className="dash-box">
          <p><strong>Costo unidad promedio:</strong> $142.50</p>
          <p><strong>COPQ:</strong> $8,320/semana (↓15%)</p>
          <p><strong>Varianza energía:</strong> +3.1%</p>
          <p><strong>ROI iniciativas activas:</strong> 23%</p>
          <p><strong>Working capital:</strong> $1.2M (↑5%)</p>
        </div>

        <div className="dash-section">
          <h3>Gráficos incluidos</h3>
          <ul>
            <li>Costos por línea</li>
            <li>Distribución COPQ (donut)</li>
            <li>Tendencia ROI trimestral</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
