import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import { getInfoBuyerThunk } from '../../store/actions';

function CalendarSeller() {
  const idPurch = localStorage.getItem('id');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInfoBuyerThunk(idPurch));
  }, []);

  const reduxSellerServices = useSelector((state) => state.infoBuyer);
  console.log(reduxSellerServices);

  const eventsTest = [];

  reduxSellerServices.map((service) => {
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
    alert(`Servicio: ${eventObj.title}\nCliente: ${eventObj.extendedProps.client}`);
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

export default CalendarSeller;
