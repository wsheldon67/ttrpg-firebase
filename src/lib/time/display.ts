import type { Time, Settings } from "./time.type"

type DisplayTime = Time & {
  suffix?: 'PM' | 'AM'
  weekday?: string
}

/** Display a moment using the display settings */
export function display(time:Time, settings:Settings):DisplayTime {
  const {
    pm_switch, one_based, weekdays, months_in_year, days_in_month
  } = settings

  const dob:DisplayTime = {...time}

  if (pm_switch) {
    if (time.hour > pm_switch) {
      dob.hour -= pm_switch
      dob.suffix = 'PM'
    } else {
      dob.suffix = 'AM'
    }
  }
  if (one_based) {
    dob.day++
    dob.month++
  }

  if (weekdays) {
    const year_days = dob.year * months_in_year * days_in_month
    const month_days = time.month * days_in_month
    const total_days = year_days + month_days + time.day
    const day_number = total_days % weekdays.length
    dob.weekday = weekdays[day_number]
  }
  return dob
}

/** Only show from the highest non-zero part thru the next (2) parts */
export function trunc(time:Time, parts:number=2):Time {
  const order = ['year', 'month', 'day', 'hour', 'minute', 'second']
  let highest:string = 'second'
  for (let v of order) {
    if (time[v] !== 0) {
      highest = v
      break
    }
  }
  const h_index = order.indexOf(highest)
  let res:any = {}
  order.forEach((v,i) => {
    if (i < h_index + parts) {
      res[v] = time[v]
    } else {
      res[v] = 0
    }
  })
  return res
}