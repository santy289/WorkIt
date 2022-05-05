import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findBoughtServicesThunk } from '../../store/actions';
import Button from '../Button/Button';
import { updatePurchasedById } from '../../services';
import './Schedule.styles.scss';

function Schedule() {
  const dispatch = useDispatch();
  const purchase = useSelector((state) => state.activeproducts);

  const { _id } = purchase;

  const id = localStorage.getItem('id');

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
    const response = await updatePurchasedById(_id, schedule);
    dispatch(findBoughtServicesThunk(id));
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
