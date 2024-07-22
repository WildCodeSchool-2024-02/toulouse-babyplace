import { fr } from "date-fns/locale";
import { ScheduleMeeting } from "react-schedule-meeting";
import "./Calendar.scss";
import { useEffect, useState } from "react";

function Calendar() {
  const availableTimeslots = Array.from({ length: 365 }, (_, i) => i)
    .map((id) => {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() + id);
      const dayOfWeek = startDate.getDay();

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        return null;
      }

      startDate.setHours(7, 30, 0, 0);
      const endDate = new Date(startDate);
      endDate.setHours(18, 30, 0, 0);

      return {
        id,
        startTime: startDate,
        endTime: endDate,
      };
    })
    .filter((timeslot) => timeslot !== null);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/childcare-center/`
        );
        const fetchedData = await response.json();
        setData(fetchedData);
      } catch (error) {
        console.error("Erreur lors de la sélection des données:", error);
      }
    };

    fetchData();
  }, []);

  if (data.length === 0) {
    return <div>Loading...</div>;
  }

  const user = data[0];

  return (
    <ScheduleMeeting
      className="custom-schedule-meeting"
      eventDurationInMinutes={user.opening} // ici on va mettre les données backend des horaires des creches c'est donc a modifier plus tard
      eventStartTimeSpreadInMinutes={user.closing} // pareil que au dessus
      availableTimeslots={availableTimeslots} // pareil
      format_selectedDateDayTitleFormatString=" cccc do LLLL"
      format_startTimeFormatString="HH:mm"
      locale={fr}
    />
  );
}

export default Calendar;
