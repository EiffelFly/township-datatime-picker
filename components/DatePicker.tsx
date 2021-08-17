import { useEffect, useState, FC } from "react";
import dayjs, { Dayjs } from 'dayjs'
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import dayjsBusinessDays from "dayjs-business-days";

dayjs.extend(dayjsBusinessDays);
dayjs.extend(utc);
dayjs.extend(timezone);

interface Props {
  weekStart: string;
  date: Dayjs;
  inviteeTimeZone: any;
}

const DatePicker: FC<Props> = ({ weekStart, date, inviteeTimeZone }) => {
  const [calendar, setCalendar] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState<number>();
  const [selectedDate, setSelectedDate] = useState<Dayjs>();

  // Dayjs have some strange import typescript issue
  // If we directly write dayjs().month(selectedMonth).format("MMMM") in template 
  // It will raise dayjs__WEBPACK_IMPORTED_MODULE_2___default(...)(...).month(...).format is not a function Error
  const [monthString, setMonthString] = useState<string>();
  const [yearString, setYearString] = useState<string>();
  

  useEffect(() => {
    if (date) {
      setSelectedDate(dayjs(date).tz(inviteeTimeZone));
      setSelectedMonth(dayjs(date).tz(inviteeTimeZone).month());
      return;
    }
    setSelectedMonth(dayjs().tz(inviteeTimeZone).month());
  }, []);

  useEffect(() => {
    if (!selectedMonth) {
      // wish next had a way of dealing with this magically;
      return;
    }
    // Setup dayjs wrapper
    const inviteeDate = dayjs().tz(inviteeTimeZone).month(selectedMonth);

    setMonthString(dayjs().month(selectedMonth).format("MMMM"));
    setYearString(dayjs().month(selectedMonth).format("YYYY"))

    // Setup calendar
    const daysInMonth = inviteeDate.daysInMonth();
    const days = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    let weekdayOfFirst = inviteeDate.date(1).day();

    if (weekStart === "Monday") {
      weekdayOfFirst -= 1;
      if (weekdayOfFirst < 0) weekdayOfFirst = 6;
    }

    // Create placeholder elements for empty days in first week
    const emptyDays = Array(weekdayOfFirst)
      .fill(null)
      .map((day, i) => (
        <div
          key={`e-${i}`}
          className={"text-center w-10 h-10 rounded-full mx-auto"}
        >
          {null}
        </div>
      ));

    setCalendar([
      ...emptyDays,
      ...days.map((day) => (
        <div
          key={`day-${day}`}
          className="w-full relative"
          style={{
            paddingTop: "100%",
          }}
        >
          <button className="w-full absolute inset-0 bg-sdm-cg-800 text-center text-sdm-steel-blue-300 hover:border hover:border-sdm-steel-blue-100">
            {day}
          </button>
        </div>
      )),
    ]);
  }, [selectedMonth, date]);

  return (
    <div className="flex flex-col gap-y-4 sm:min-w-[455px]">
      <div className="flex flex-row">
        <div className="flex flex-row gap-x-2">
          <div className="my-auto font-sans text-2xl text-sdm-cg-50">
            {monthString}
          </div>
          <div className="my-auto font-sans text-2xl text-sdm-cg-400">
            {yearString}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center border-b border-t border-sdm-bronze-100 sm:border-0">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((weekDay) => (
          <div
            key={weekDay}
            className="uppercase text-sdm-cg-500 text-xs tracking-widest my-4"
          >
            {weekDay}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 text-center">{calendar}</div>
    </div>
  );
};

export default DatePicker;
