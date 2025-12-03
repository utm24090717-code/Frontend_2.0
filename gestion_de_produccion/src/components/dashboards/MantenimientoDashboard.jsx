import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboards.css";

export default function MantenimientoDashboard() {
  return (
    <div className="dash-container">
      <img src={logo} alt="logo" className="dash-logo" />

      <div className="dash-card">
        <h2 className="dash-title">DASHBOARD DE MANTENIMIENTO</h2>

        <div className="dash-box">
          <p><strong>MTBF Promedio:</strong> 46h</p>
          <p><strong>MTTR:</strong> 14 min</p>
          <p><strong>Órdenes críticas:</strong> 5</p>
          <p><strong>Backlog:</strong> 12</p>
          <p><strong>Predictivo (RUL &lt; 7d):</strong> 3 equipos</p>
        </div>

        <div className="dash-section">
          <h3>Gráficos incluidos</h3>
          <ul>
            <li>% Cumplimiento PM</li>
            <li>Scatter vibración/temperatura</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
