
export function name_to_color(name:string):string {
  const light = window.matchMedia('(prefers-color-scheme: light)').matches
  return `hsl(${n2h(name)}, ${light ? '80%' : '40%'}, ${light ? '50%': '60%'})`
}

export function n2h(name:string):number {
  let total = 0
  for (let i=0; i < name.length; i++) {
    total += name.charCodeAt(i)
  }
  return (total * 16) % 256
}

type Dark = number
type Light = number
export function n2h_settings(name:string, saturation:number|[Dark, Light], light:number|[Dark, Light]):string {
  const light_mode = Number(window.matchMedia('(prefers-color-scheme: light)').matches)
  const h = n2h(name)
  const s = typeof saturation === 'number' ? saturation : saturation[light_mode]
  const l = typeof light === 'number' ? light : light[light_mode]
  return `hsl(${h}, ${s}%, ${l}%)`
}