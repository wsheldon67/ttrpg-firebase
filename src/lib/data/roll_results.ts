
export function results(label:string):[Miss, Hit, TenPlus, Both] {
  switch (label) {
    case 'Intimidate - Fueled by Anger':
    case 'Intimidate':
      return [
        basic_miss, `<p>They choose 1:</p>`, `<p>You eliminate 1, then they choose 1 of the remaining options:</p>`,
        `<ul>
          <li>They run to escape or get backup.</li>
          <li>They back down but keep watch</li>
          <li>They give in with a few stipulations</li>
          <li>They attack you, but off-balance; the GM marks a condition on them</li>
        </ul>`
      ]
    case 'Assess a Situation':
      return [
        basic_miss,
        `Ask 1 question`, `Ask 2 questions`,
        `<ul>
          <li>What here can I use to _____?</li>
          <li>Who or what is the biggest threat?</li>
          <li>What should I be on the lookout for?</li>
          <li>What's my best way out/in/through?</li>
          <li>Who or what is in the greatest danger?</li>
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
type Miss = string
type Hit = string
type TenPlus = string
type Both = string
const basic_miss = `There are no specific consequences for misses on basic moves`