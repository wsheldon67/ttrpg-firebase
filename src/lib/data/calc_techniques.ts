import { techniques } from "./techniques"

interface Technique {
  component: any
  name: string
}

export async function get_techniques(list_of_techniques:string[]):Promise<Technique[]> {
  const promises = list_of_techniques.map((name) => {
    const technique = techniques.find(el => el.name === name)
    if (technique) {
      return import(`./Techniques/${technique.url}.svelte`)
    } else {
      console.log(name,'not found in get_techniques')
    }
  })
  const componets = await Promise.all(promises)
  const res = list_of_techniques.map((technique, index) => {
    return {
      component: componets[index].default,
      name: technique
    }
  })
  return res
}