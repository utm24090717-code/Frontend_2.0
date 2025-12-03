import React from "react";
import { useNavigate } from "react-router-dom";
import "./dashboards.css";

export default function SupervisorDashboard() {
  return (
    <div className="dash-container">
      <img src={logo} alt="logo" className="dash-logo" />

      <div className="dash-card">
        <h2 className="dash-title">DASHBOARD DEL SUPERVISOR</h2>

        <div className="dash-box">
          <p><strong>Turno:</strong> 2 (12:00–20:00)</p>
          <p><strong>Cumplimiento de plan:</strong> 96%</p>
          <p><strong>Scrap acumulado:</strong> 0.7% ($4,380)</p>
          <p><strong>Paros mayores:</strong> 2 (Robot 4, Prensa 7)</p>
          <p><strong>Recomendaciones autónomas:</strong> 4 ejecutadas</p>
          <p><strong>Aprobaciones pendientes:</strong> 1</p>
        </div>

        <div className="dash-section">
          <h3>Gráficos incluidos</h3>
          <ul>
            <li>Pareto Causas de Paro/Scrap</li>
            <li>Tendencia OEE Diario</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
