import type { Time } from "./time"

/** If your string is longer than max_length, we'll cut it short and add... */
export function truncate_string(string: string, max_length: number): string {
  if (string.length > max_length) {
    return string.substring(0, max_length) + '...'
  } else {
    return string
  }
}
/** Make sure your number always has a sign. */
export function signed(number: number): string {
  if (number < 0) {
    return number.toString()
  } else {
    return '+' + number
  }
}
/** Add leading zeros to a number */
export function lz (num:number, digits:number):string {
  return num.toString().padStart(digits, '0')
}
/** Format a duration: (yyy/mm/dd) hh:mm:ss */
export function duration_short(time:Time):string {
  const {year, month, day, hour, minute, second} = time
  let res = ''
  if (year||month||day) {
    res += lz(year, 4) + '/' + lz(month, 2) + '/' + lz(day, 2) + ' '
  }
  res += lz(hour,2) + ':' + lz(minute, 2) + ':' + lz(second, 2)
  return res
}
/** Format a duration: x years, x months */
export function duration_long(time:Time):string {
  const order = ['year', 'month', 'day', 'hour', 'minute', 'second']
  let last = 'year'
  for (let i of order) {
    if (time[i]) {last = i}
  }
  let res = ''
  for (let index in order) {
    const i = order[index]
    if (time[i] && order[index+1] !== last && i !== last) {
      res += plural(time[i],i) + ', '
    } else if (time[i] && order[index+1] === last) {
      res += plural(time[i],i) + ', and '
    } else if (time[i] && i == last) {
      res += plural(time[i],i)
    }
  }
  return res
}

/** If there's more than one, pluralize */
export function plural(amt:number, word:string, plural?:string) {
  if (amt !== 1) {
    return amt + ' ' + (plural || word + 's')
  } else {
    return amt + ' ' + word
  }
}

/** Format a duration: #y, #m */
export function duration_abbr(time:Time):string {
  const order = ['year', 'month', 'day', 'hour', 'minute', 'second']
  let last = 'year'
  for (let i of order) {
    if (time[i]) {last = i}
  }
  let res = ''
  for (let index in order) {
    const i = order[index]
    if (time[i] && i !== last) {
      res += time[i] + i.charAt(0) + ', '
    } else if (time[i] && i === last) {
      res += time[i] + i.charAt(0)
    }
  }
  return res
}

/** Format an array with commas and the word 'and' */
export function array_to_words(array:string[]):string {
  let res = ''
  if (array.length === 1){return array[0]}
  if (array.length === 2){return array[0] + ' and ' + array[1]}
  array.forEach((v, i) => {
    if (i !== array.length - 1) {
      res += v + ', '
    } else {
      res += 'and ' + v
    }
  })
  return res
}