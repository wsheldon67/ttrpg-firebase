
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