import { fr } from "date-fns/locale";
import { ScheduleMeeting } from "react-schedule-meeting";

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

  return (
    <ScheduleMeeting
      eventDurationInMinutes={240} // ici on va mettre les données backende des horaires des crehess donc a modifier plus tard
      eventStartTimeSpreadInMinutes={90} // pareil que au dessus
      availableTimeslots={availableTimeslots} // pareil
      format_selectedDateDayTitleFormatString=" cccc do LLLL"
      format_startTimeFormatString="HH:mm"
      locale={fr}
    />
  );
}

export default Calendar;
