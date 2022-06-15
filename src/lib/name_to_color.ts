
export function name_to_color(name:string):string {
  const light = window.matchMedia('(prefers-color-scheme: light)').matches
  let total = 0
  for (let i=0; i < name.length; i++) {
    total += name.charCodeAt(i)
  }
  return `hsl(${total % 254}, ${light ? '80%' : '40%'}, ${light ? '60%': '60%'})`
}