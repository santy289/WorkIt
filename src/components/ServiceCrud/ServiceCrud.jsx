/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import Button from '../Button/Button';
import './ServiceCrud.styles.scss';

function ServiceCrud() {
  const [form, setForm] = useState({
    service: '',
    price: 0,
    costtype: 'done',
    desc: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="servicecrud__card">
      <form className="servicecrud__form" onSubmit={handleSubmit}>
        <label className="" htmlFor="service">Nombre del servicio</label>
        <input type="text" id="service" name="service" onChange={handleChange} />
        <label className="" htmlFor="price">Precio</label>
        <input type="number" id="price" name="price" onChange={handleChange} />
        <label className="" htmlFor="costtype">Forma de cobro</label>
        <select id="costtype" name="costtype" onChange={handleChange}>
          <option value="done">Completado el servicio</option>
          <option value="hours">Por horas</option>
        </select>
        <label className="" htmlFor="desc">Descripción</label>
        <textarea
          placeholder="Descripción de tu servicio..."
          id="desc"
          name="desc"
          onChange={handleChange}
        />
        <Button text="Crear servicio" type="submit" />
      </form>
    </div>
  );
}

export default ServiceCrud;
