import type { Time, Settings, Unit } from "./time.type";
import { settle } from "./settle";

export function set_unit(
    time: Time, settings: Settings,
    amt: number, unit: Unit
  ): Time {
  return settle({...time, [unit]:amt}, settings, true)
}

export function add(
    time: Time, settings: Settings,
    amt: number, unit: Unit
  ): Time {
  const to_set = {...time}
  to_set[unit] += amt
  return settle(to_set, settings, true)
}

export function next_day(
    time: Time, settings: Settings, amt: number
  ): Time {
  const to_set = {...time}
  to_set.day += amt
  const {hour, minute, second} = settings.next_day_time
  to_set.hour = hour
  to_set.minute = minute
  to_set.second = second
  return settle(to_set, settings)
}