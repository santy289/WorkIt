import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import { updatePurchasedById } from '../../services';
import './Schedule.styles.scss';

function Schedule({ paymentId }) {
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
    const response = await updatePurchasedById(paymentId, schedule);
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

Schedule.propTypes = {
  paymentId: PropTypes.string,
};

Schedule.defaultProps = {
  paymentId: null,
};

export default Schedule;
