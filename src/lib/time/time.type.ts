export type Time = {
  year: number, month: number, day: number,
  hour: number, minute: number, second: number
}

export type Settings = {
  months_in_year: number,
  days_in_month: number,
  hours_in_day: number,
  pm_switch?: number | false,
  one_based?: boolean,
  weekdays?: string[],
  next_day_time: {
    hour: number,
    minute: number,
    second: number
  }
}

export type Unit = 'year'|'month'|'day'|'hour'|'minute'|'second'