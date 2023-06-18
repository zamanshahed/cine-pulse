'use client'
import moment from 'moment'
import { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const CustomCalendar = () => {
  let weekdays = moment.weekdaysShort()
  const [currentDate, setCurrentDate] = useState(moment().startOf('month'));
  const [calendarObject, setCalendarObject] = useState([]);
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [eventData, setEventData] = useState(null);

  const initializeCalendar = () => {
    console.log("initializeCalendar:::");

    let monthObject = []; // for blank: {index: 0, date: 0 }, for date: {index: 1, date: 1}
    let date = 0
    let startDateOfTheMonth = currentDate?.startOf('month').format('d');
    let endDateOfTheMonth = currentDate?.endOf('month').format('D');

    for (let i = 0; i < 42; i++) {
      if (i > (startDateOfTheMonth - 1))
        monthObject.push({ index: i, date: (i - (startDateOfTheMonth - 1)) <= endDateOfTheMonth ? i - (startDateOfTheMonth - 1) : 0, event: [{ title: 'one', desc: 'lorem ipsum dolor sit amet' }, { title: 'two', desc: 'lorem ipsum dolor sit amet' }, { title: 'three', desc: 'lorem ipsum dolor sit amet' }] });
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

    // console.log(monthObject);
    if (totalWeeks[5][0].date == 0) totalWeeks.pop();

    console.log(totalWeeks);
    setCalendarObject(totalWeeks);
  }

  const nextMonthHandler = () => {
    setCurrentDate(currentDate.add(1, 'months').startOf('month'));
    console.log("nextMonthHandler:::", currentDate);

    initializeCalendar();
  }
  const prevMonthHandler = () => {
    setCurrentDate(currentDate.subtract(1, 'months').startOf('month'));
    console.log("prevMonthHandler:::", currentDate);

    initializeCalendar();
  }

  useEffect(() => {
    initializeCalendar();
  }, [currentDate]);

  return (
    <div>
      <div
        className='bg-cyan-500 text-white text-center p-2 rounded-md'
      >{weekdays}</div>
      <div>Current Month: {currentDate.format('M')}</div>
      <div>moment month: {moment().format('M')}</div>
      <div>current date: {currentDate.format('D')}</div>
      <div>moment date: {moment().format('D')}</div>

      <div className="py-10 flex items-center space-x-3">

        {/* previous button */}
        <div onClick={prevMonthHandler} className="rounded-full bg-rose-400 p-1 cursor-pointer">
          <MdKeyboardArrowRight size={24} className='rotate-180' />
        </div>
        <div className='font-semibold text-xl'>{currentDate.format('MMM, YYYY')}</div>

        {/* next button */}
        <div onClick={nextMonthHandler} className="rounded-full bg-rose-400 p-1 cursor-pointer">
          <MdKeyboardArrowRight size={24} />
        </div>
      </div>


      <div className='relative'>
        {showEventDetails &&
          <div className="absolute bg-zinc-600 w-[300px] h-[300px] z-50">
            <div
              onClick={() => setShowEventDetails(false)}
              className="absolute right-[5px] top-[5px] cursor-pointer">
              <AiOutlineCloseCircle size={22} />
            </div>
            <div>title: {eventData?.title ?? "NA"}</div>
            <div>desc: {eventData?.desc ?? "NA"}</div>
          </div>}

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
                  <td className='relative border border-rose-400 h-[130px] bg-gray-700' key={index}>
                    {currentDate.format('M') == moment().format('M') && day.date == moment().format('D') ?
                      <div className='absolute top-[5px] left-[5px] text-xl border-2 border-rose-400 text-white shadow-lg p-2 rounded-md'>{day.date > 0 ? day.date : ""}</div>
                      : <div className='absolute top-[5px] left-[5px] text-xl text-neutral-300'>{day.date > 0 ? day.date : ""}</div>
                    }
                    <div
                      className="absolute bottom-[5px] left-[5px] space-y-1">
                      {day?.event?.map((event, index) => (
                        <div
                          onMouseEnter={() => {
                            setEventData(event);
                            setShowEventDetails(true);
                          }}
                          onMouseLeave={() => {
                            // setShowEventDetails(false);
                          }}
                          className='bg-emerald-700 px-2 rounded-md text-xs' key={index}>{event.title}</div>
                      ))}
                    </div>
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