import type { Time, Settings } from "./time.type"

/** Carry over any values that overflow their setting.
 * 
 * If one_based is true, 1 will be subtracted from the inputed month and day
 * Set as_is=true to override this behavior.
 */
export function settle(time:Time, settings:Settings, as_is?:boolean):Time {
  const {
    months_in_year,
    days_in_month,
    hours_in_day,
    one_based
  } = settings

  const units = {
    'second': 60,
    'minute': 60,
    'hour': hours_in_day,
    'day': days_in_month,
    'month': months_in_year,
    'year': Infinity
  }

  const sob = {...time}

  if (one_based && !as_is) {
    sob.month--
    sob.day--
  }

  const order = ['year', 'month', 'day', 'hour', 'minute', 'second']

  for (let i in order) {
    const unit = order[i]
    const next = order[1+Number(i)]
    if (next && sob[unit]) {
      const frac = sob[unit] - Math.trunc(sob[unit])
      sob[next] += frac * units[next]
      sob[unit] -= frac
    }
  }

  let carry_over = 0

  for (let unit in units) {
    const overflow = units[unit]
    let set_value = sob[unit] + carry_over

    if (set_value >= overflow || set_value < 0) {
      carry_over = Math.floor(set_value / overflow)
      set_value -= carry_over * overflow
    } else {
      carry_over = 0
    }
    
    sob[unit] = Number(set_value)
  }
  sob.second = Math.floor(sob.second)
  return sob
}