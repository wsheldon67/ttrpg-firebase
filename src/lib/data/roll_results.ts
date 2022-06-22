
function results(label:string):[string, string, string, string] {
  switch (label) {
    case 'Intimidate - Fueled by Anger':
    case 'Intimidate':
      return [
        `There are no specific consquecnes listed for basic moves.`, `<p>They choose 1:</p>`, `<p>You eliminate 1, then they choose 1 of the remaining options:</p>`,
        `<ul>
          <li>They run to escape or get backup.</li>
          <li>They back down but keep watch</li>
          <li>They give in with a few stipulations</li>
          <li>They attack you, but off-balance; the GM marks a condition on them</li>
        </ul>`
      ]
    default:
      return ['','','','']
  }
}

export function roll_result(label:string, total:number) {
  var level
  if (total <= 6){ level = 0 }
  else if (total >= 7 && total <= 9) {level = 1}
  else {level = 2}
  let res = ''
  const text = results(label)
  res += text[level]
  if (level > 0) {
    res += text[3]
  }
  return res
}