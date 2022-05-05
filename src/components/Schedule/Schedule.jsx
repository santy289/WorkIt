import { useState } from 'react';
import Button from '../Button/Button';
import { updatePurchasedById } from '../../services';
import './Schedule.styles.scss';

function Schedule() {
  const serviceId = localStorage.getItem('id_service');

  const [schedule, setSchedule] = useState({
    scheduledDate: '',
  });

  const handleChange = (e) => {
    setSchedule({
      scheduledDate: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updatePurchasedById(serviceId, schedule);
    console.log(response);
    return response;
  };

  return (
    <section className="schedule">
      <div className="schedule__content">
        <form className="schedule__form" action="">
          <label htmlFor="datetime">
            Fecha:&nbsp;
            <input type="datetime-local" id="datetime" className="schedule__form--date" onChange={handleChange} />
          </label>
          <Button type="submit" text="AGENDAR SERVICIO" handleClick={handleSubmit} />
        </form>
      </div>
    </section>
  );
}

export default Schedule;
