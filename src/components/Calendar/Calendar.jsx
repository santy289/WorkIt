import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { findBoughtServicesThunk } from '../../store/actions';

function Calendar() {
  const idPurch = localStorage.getItem('id');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(findBoughtServicesThunk(idPurch));
  }, []);

  const reduxBoughtServices = useSelector((state) => state.boughtservice);

  const eventsTest = [];

  reduxBoughtServices.map((service) => {
    const info = {
      client: service.username,
      title: service.title,
      date: service.scheduledDate,
    };
    eventsTest.push(info);
    return info;
  });

  const handleClick = (info) => {
    const eventObj = info.event;
    alert(`Servicio: ${eventObj.title}\nOferente: ${eventObj.extendedProps.client}`);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      headerToolbar={{
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridDay',
      }}
      initialView="dayGridMonth"
      events={eventsTest}
      eventColor="rgb(22, 140, 202)"
      eventDisplay="block"
      eventClick={handleClick}
      timeFormat="H(:mm)"
    />
  );
}

export default Calendar;
