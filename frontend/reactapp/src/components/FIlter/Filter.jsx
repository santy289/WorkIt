import React from "react";
import './Filter.styles.scss';

const header = () => {
  return (
    <div className="containerFilter">
      
      <div className="box">
        <h2>Calificacion minima</h2>
        <select>

          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <h2>Rango de precio</h2>
        <select>

          <option>10-30</option>
          <option>30-50</option>
          <option>50-100</option>
          <option>100-400</option>
          <option>+1000</option>
        </select>
      </div>
      <h2>    Tipos de pago</h2>
      <div className="types">
        <label className="checkbox">
          <input type="checkbox" />Hora
          <svg viewBox="0 0 21 18">



          </svg>

        </label>
        <label class="checkbox">
          <input type="checkbox" />Servicio
          <svg viewBox="0 0 21 18">



          </svg>

        </label>
        <label class="checkbox">
          <input type="checkbox" />Objetivos
          <svg viewBox="0 0 21 18">



          </svg>

        </label>
      </div>
    </div>
  )
}

export default header;
