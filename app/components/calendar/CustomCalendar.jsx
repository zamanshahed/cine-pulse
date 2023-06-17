'use client'
import moment from 'moment'
import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'

const CustomCalendar = () => {
  let weekdays = moment.weekdaysShort()
  const [currentDate, setCurrentDate] = useState(moment().startOf('month'));
  const [currentMonth, setCurrentMonth] = useState();
  // const [startDateOfTheMonth, setStartDateOfTheMonth] = useState(currentDate?.startOf('month').format('d'));
  // const [endDateOfTheMonth, setEndDateOfTheMonth] = useState(currentDate?.endOf('month').format('D'));
  const [calendarObject, setCalendarObject] = useState([]);

  const initializeCalendar = () => {
    console.log("initializeCalendar:::");

    let monthObject = []; // for blank: {index: 0, date: 0 }, for date: {index: 1, date: 1}
    let date = 0
    let startDateOfTheMonth = currentDate?.startOf('month').format('d');
    let endDateOfTheMonth = currentDate?.endOf('month').format('D');

    for (let i = 0; i < 42; i++) {
      if (i > (startDateOfTheMonth - 1))
        monthObject.push({ index: i, date: (i - (startDateOfTheMonth - 1)) <= endDateOfTheMonth ? i - (startDateOfTheMonth - 1) : 0 });
      else {
        monthObject.push({ index: i, date: 0 });
      }
      if (i > startDateOfTheMonth && i <= endDateOfTheMonth) date = date + 1;
    }

    // create weeks for tr
    let totalWeeks = []
    for (let i = 0; i < 6; i++) {
      let week = [];
      for (let j = 0; j < 7; j++) {
        week.push(monthObject[(i * 7) + j]);
      }
      totalWeeks.push(week);
    }

    console.log(monthObject);
    console.log(totalWeeks);
    setCalendarObject(totalWeeks);
  }

  const nextMonthHandler = () => {
    setCurrentDate(currentDate.add(1, 'months').startOf('month'));
    console.log("nextMonthHandler:::", currentDate);

    initializeUtils();
    initializeCalendar();
  }
  const prevMonthHandler = () => {
    setCurrentDate(currentDate.subtract(1, 'months').startOf('month'));
    console.log("prevMonthHandler:::", currentDate);

    initializeUtils();
    initializeCalendar();
  }

  const initializeUtils = async () => {
    console.log("initializeUtils:::");
    await setCurrentMonth(currentDate.format('M'));
    // await setStartDateOfTheMonth(currentDate.startOf('month').format('d'));
    // await setEndDateOfTheMonth(currentDate.endOf('month').format('D'));
  }

  useEffect(() => {
    initializeUtils();

    initializeCalendar();
  }, [currentDate]);

  return (
    <div>
      <div>{weekdays}</div>
      <div>Current Month: {currentDate.format('MMM, YYYY')}</div>

      <div className="py-10 flex items-center space-x-3">

        {/* previous button */}
        <div onClick={prevMonthHandler} className="rounded-full bg-rose-400 p-1 cursor-pointer">
          <MdKeyboardArrowRight size={24} className='rotate-180' />
        </div>
        <div>CALENDAR: {currentDate.format('MMM, YYYY')}</div>

        {/* next button */}
        <div onClick={nextMonthHandler} className="rounded-full bg-rose-400 p-1 cursor-pointer">
          <MdKeyboardArrowRight size={24} />
        </div>
      </div>
      <div>
        <table className='w-full'>
          <tr className=''>
            {weekdays.map((day, index) => (
              <th className='px-2 py-3 border border-rose-400 bg-gray-700 min-w-[120px] text-left' key={index}>{day}</th>
            ))}
          </tr>
          {
            calendarObject.map((week, index) => (
              <tr className='' key={index}>
                {week.map((day, index) => (
                  <td className='border  border-rose-400 h-[130px] bg-gray-700 relative' key={index}>
                    <div className='absolute top-[5px] left-[5px] text-xl'>{day.date > 0 ? day.date : ""}</div>
                  </td>
                ))}
              </tr>
            ))
          }
        </table>
      </div>
    </div>
  )
}

export default CustomCalendar