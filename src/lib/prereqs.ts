
export type Item = {
  id: string, cats?: string[], pre?: string[]
  func: Function
}

export function run(items:Item[], params:any, threshold:number = 500):void {
  const acats = {}
  const list = [...items]
  list.forEach((mod)=> {
    if (!mod.cats){mod.cats = []}
    mod.cats.forEach((el) => {
      if (!acats[el]){acats[el]=0}
      acats[el]++
    })
  })
  const problem_childs = {}
  while (list.length > 0) {
    const el = {...list[0]}
    if (!el.cats){el.cats = []}
    if (!el.pre){el.pre = []}
    const {id, cats, pre, func} = el
    let good = true
    for (let p of pre) {
      if(list.find(el => el.id === p)) {good = false; break}
      if(acats[p]) {good = false; break}
    }
    if (good) {
      func(params)
      list.splice(0, 1)
      for (let cc of cats){acats[cc]--}
    } else {
      list.splice(0, 1)
      list.push(el)
      add_problem_child(id)
    }
  }
  function add_problem_child(id) {
    if (!problem_childs[id]){problem_childs[id] = 1}
    else {problem_childs[id]++}
    if (problem_childs[id] > threshold) {
      console.log(list)
      throw new Error(`Item id ${id} exceeded the threshold for retries. Check for circular dependencies.`)
    }
  }
}