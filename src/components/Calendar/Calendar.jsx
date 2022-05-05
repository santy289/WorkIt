import React from 'react';
import FullCalendar from '@fullcalendar/react';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';

function Calendar() {
  const events = [
    { title: 'Lavar caballos', client: 'Mi vecina', date: new Date('2022-05-02T03:15:42.782+00:00') },
    { title: 'Lavar perros', start: '2022-05-05T14:30:00', client: 'Mi papa' },
    { title: 'Lavar gallinas', client: 'Mi tía', date: new Date(2022, 4, 5) },
    { title: 'Lavar cerdos', client: 'Mi novia', date: new Date(2022, 4, 5) },
    { title: 'Lavar gatos', client: 'Mi celador', date: new Date(2022, 4, 16) },
    { title: 'Lavar ardillas', client: 'Mi profesor', date: new Date(2022, 4, 17) },
    { title: 'Lavar ballenas', client: 'Mi suegro', date: new Date(2022, 4, 27) },
    { title: 'Lavar conejos', client: 'Mi payaso', date: new Date(2022, 4, 10) },
    { title: 'Horario no disponible', start: new Date('2022-05-08T08:00:00.782+00:00') },
  ];

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
      events={events}
      eventColor="rgba(255, 0, 0, 0.5)"
      eventDisplay="block"
      eventClick={handleClick}
      timeFormat="H(:mm)"
    />
  );
}

export default Calendar;
