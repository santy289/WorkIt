import './Schedule.styles.scss';

function Schedule() {
  return (
    <section className="schedule">
      <div className="schedule__content">
        <form className="schedule__form" action="">
          <label htmlFor="date">
            Fecha:&nbsp;
            <input type="date" id="date" className="schedule__form--date" />
          </label>
          <label htmlFor="time">
            Hora de inicio:&nbsp;
            <input type="time" id="time" className="schedule__form--time" step="3600000" />
          </label>
        </form>
      </div>
    </section>
  );
}

export default Schedule;
