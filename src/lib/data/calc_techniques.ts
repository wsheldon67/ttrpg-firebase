import { techniques } from "./techniques"

interface Technique {
  component: any
  name: string
}

export async function get_techniques(list_of_techniques:string[]):Promise<Technique[]> {
  const promises = list_of_techniques.map((name) => {
    return import(`./Techniques/${techniques.find(el => el.name === name).url}.svelte`)
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