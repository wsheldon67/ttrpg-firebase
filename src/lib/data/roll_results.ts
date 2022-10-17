interface RollResult {
  miss?:string,
  hit?:string,
  ten_plus?:string,
  both_pre?:string,
  both_post?:string
}

export function results(label:string):RollResult {
  switch (label) {
    case 'Intimidate - Fueled by Anger':
    case 'Intimidate':
      return {
        miss: basic_miss,
        hit: `<p>They choose 1:</p>`,
        ten_plus: `<p>You eliminate 1, then they choose 1 of the remaining options:</p>`,
        both_post: `<ul>
          <li>They run to escape or get backup.</li>
          <li>They back down but keep watch</li>
          <li>They give in with a few stipulations</li>
          <li>They attack you, but off-balance; the GM marks a condition on them</li>
        </ul>`
      }
    case 'Assess a Situation':
      return {
        miss: basic_miss,
        hit: `Ask 1 question:`,
        ten_plus: `Ask 2 questions:`,
        both_post: `<ul>
          <li>What here can I use to _____?</li>
          <li>Who or what is the biggest threat?</li>
          <li>What should I be on the lookout for?</li>
          <li>What's my best way out/in/through?</li>
          <li>Who or what is in the greatest danger?</li>
        </ul>`
      }
    case 'Guide and Comfort':
      return {
        miss: basic_miss,
        both_pre: `They choose 1:
        <ul class='or'>
          <li>They embrace your guidance and comfort. They clear a condition or 2 fatigue. You may ask one question, which they must answer honestly.</li>
          <li>They shut you down. They inflict a condition on you, and you shift your balance in response.</li>
        </ul>`,
        ten_plus: `If they embrace your guidance and comfort, you may also shift their balance.`
      }
    case 'Plead':
      return {
        miss: basic_miss,
        hit: `The GM tells you what more they need (i.e. evidence, guidance, resources) before they will act`,
        ten_plus: `They act now and do their best until the situation changes`
      }
    case 'Push Your Luck':
      return {
        miss: basic_miss,
        both_pre: `You succeed, but the GM tells you what it costs you.`,
        ten_plus: `The GM also tells you what other lucky opportunity falls in your lap`
      }
    case 'Rely on Your Skills and Training':
      return {
        miss: basic_miss,
        hit: `You do it imperfectly - the GM tells you how your approach might lead to unexpected consquences; accept those consequences or mark 1 fatigue.`,
        ten_plus: `You do it.`
      }
    case 'Trick':
      return {
        miss: basic_miss,
        both_pre: `They fall for it and do what you want for the moment.`,
        hit: `Pick 1:`,
        ten_plus: `Pick 2`,
        both_post: `
          <ul>
            <li>They stumble; take +1 forward to acting against them</li>
            <li>They act foolishly; the GM tells you what additional opportunity they give you</li>
            <li>They overcommit; they are deceived for some time</li>
          </ul>`
      }
    case 'Call Someone Out':
      return {
        miss: `They can demand you act in accordance with one of your principles. Mark a condition or act as they request.`,
        both_pre: `They are called to act as you say. They must do it or mark a condition. `,
        hit: `They also challenge your view of the world in turn. Mark 1 fatigue or they shift your balance as they choose.`,
      }
    case 'Deny a Callout':
      return {
        miss: `You stand strong. Clear a condition, 1-fatigue, or shift your balance.`,
        both_pre: `Act as they say or mark 1 fatigue. `,
        ten_plus: `Also shift your balance towards the called-on principle.`
      }
    case 'Resist Shifting Your Balance':
      return {
        miss: `Mark a condition. The GM shifts your balance twice.`,
        both_pre: `You maintain your balance.`,
        hit: `Choose 1:`,
        ten_plus: `Choose 2:`,
        both_post: `<ul>
          <li>Clear a condition or mark growth by immediately acting to prove them wrong.</li>
          <li>Shift your balance towards the opposite principle.</li>
          <li>Learn what their principle is. If you already know, take +1 forward against them.</li>
        </ul>`
      }
    default:
      return {}
  }
}

export function roll_result(label:string, total:number) {
  let res = ``
  const {miss, hit, ten_plus, both_pre, both_post} = results(label)
  if (total <= 6) { res += miss || '' }
  if (total >= 7) { res += both_pre || '' }
  if (total >= 7 && total <= 9) { res += hit || '' }
  if (total >= 10) { res += ten_plus || '' }
  if (total >= 7) { res += both_post || '' }
  return res
}
const basic_miss = `There are no specific consequences for misses on basic moves`