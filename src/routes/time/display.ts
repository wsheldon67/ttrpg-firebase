import type { Time, Settings } from "./time.type"

type DisplayTime = Time & {
  suffix?: 'PM' | 'AM'
  weekday?: string
}

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