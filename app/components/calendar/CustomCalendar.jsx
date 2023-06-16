'use client'
import moment from 'moment'


const CustomCalendar = () => {
  let weekDayShort = moment.weekdaysShort();
  let firstDayOfMonth =  moment().startOf('month').format('MMMM Do YYYY, h:mm:ss a');

  console.log('first day of month::::', firstDayOfMonth);
  return (
    <div>
      <table>
        <tr>
          {weekDayShort?.map((day, index) => (
            <th key={index}>{day}</th>
          ))}
        </tr>
      </table>
    </div>
  )
}

export default CustomCalendar