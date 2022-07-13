
export function get_unique_from_array(source:any[], property:string):any[] {
  let unique = new Set()
  for (let ob of source) {
    if (!ob[property]) {continue}
    for (let item of ob[property]) {
      unique.add(item)
    }
  }
  return [...unique]
}