
export function truncate_string(string: string, max_length: number): string {
  if (string.length > max_length) {
    return string.substring(0, max_length) + '...'
  } else {
    return string
  }
}