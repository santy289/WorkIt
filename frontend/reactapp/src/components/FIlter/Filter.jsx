import { React } from 'react';
import './Filter.styles.scss';

function Filter() {
  return (
    <div className="containerFilter">
      <div className="box">
        <h2>Calificacion minima</h2>
        <select type="text" id="calificacion">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <h2>Rango de precio</h2>
        <select type="text" id="">
          <option>10-30</option>
          <option>30-50</option>
          <option>50-100</option>
          <option>100-400</option>
          <option>+1000</option>
        </select>
      </div>
      <h2>Tipos de pago</h2>
      <div className="types">
        <label htmlFor="btn-check5" className="checkbox">
          <input type="checkbox" />
          Hora
          <svg viewBox="0 0 21 18" />
        </label>
        <label htmlFor="btn-check5" className="checkbox">
          <input type="checkbox" />
          Servicio
          <svg viewBox="0 0 21 18" />
        </label>
        <label htmlFor="btn-check5" className="checkbox" type="label">
          <input type="checkbox" />
          Objetivos
          <svg viewBox="0 0 21 18" />

        </label>
      </div>
    </div>
  );
}

export default Filter;
