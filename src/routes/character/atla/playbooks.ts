interface Playbooks {
  [Playbook: string]: {
    history: [string, string, string, string, string]
    technique: {name:string, url:string}
    demeanors: string[]
    connections: [[string,string], [string,string]]
  }
}

const group = `Why are you committed to this group or purpose?`

export const playbooks:Playbooks = {
  Adamant: {
    history: [
      `What experience of being decieved or manipulated convinced you to steel yourself against being swayed by other people?`,
      `Who was your first lodestar, and why were they an exception? Why aren't they your lodestar anymore?`,
      `Who earned your grudging respect by teaching you pragmatism?`,
      `What heirloom or piece of craftsmanship do you carry to remind you to stay true to yourself?`,
      group
    ],
    technique: {name: 'Pinpoint Aim', url: 'Playbooks/Adamant/PinpointAim'},
    demeanors: [],
    connections: [
      [``, `takes issue with my methods - perhaps they have a point, but I certainly can't admit that to them!`],
      [``, `is my lodestar; something about them makes them the one person I let my guard down around.`]
    ]
  },
  Bold: {
    history: [
      `Why do you feel the need to prove yourself so badly?`,
      `Who epitomizes the kind of big, bold figure you hope to be?`,
      `Whose approval do you think you will never attain?`,
      `What token or symbol do you wear to prove you are serious?`,
      group
    ],
    technique: {name: 'Tag Team', url: 'Playbooks/Bold/TagTeam'},
    demeanors: [],
    connections: [
      ['', `scoffs at me and my plans; one day I'll show them what I can do.`],
      ['', `has a pretty good head on their shoulders; they're a great sounding board for my ideas.`]
    ]
  },
  Guardian: {
    history: [
      `What pushed you to assume responsibility for the people you care about?`,
      `Whom have you protected for so long… but maybe doesn't need you anymore?`,
      `Who used to be in your circle of trust before they betrayed you?`,
      `What tattered garment or adornment reminds you of those you protect… or failed to protect?`,
      group
    ],
    technique: {name: 'Divert', url: 'Playbooks/Guardian/Divert'},
    demeanors: [],
    connections: [
      ['',`is my ward - they need me to have their back, end of story.`],
      ['',`looks like they're more than capable without my help; I'm glad some of us can take care of ourselves.`]
    ]
  },
  Hammer: {
    history: [
      `What injustice has driven you to use your strength for good?`,
      `Who represents the kind of positive strength and force you want to embody?`,
      `Who tried their best to teach you restraint, calm, and thoughtfulness?`,
      `What fragile trinket or heirloom do you keep and protect?`,
      group
    ],
    technique: {name: 'Overwhelm', url: 'Playbooks/Hammer/Overwhelm'},
    demeanors: ['Playful', 'Blunt', 'Quiet', 'Loud', 'Excessive', 'Determined'],
    connections: [
      ['',`has a way to solve problems with words instead of firsts - it's really impressive!`],
      ['I worry',`won't be able to hold their own when things get tough. I'm going to toughen them up!`],
    ]
  },
  Icon: {
    history : [
      `What tradition do you represent as its icon? Why can't you set down the role?`,
      `Who was your chief mentor, teaching you the nature of your burden and its value?`,
      `Who showed you that even with the weight of your burden, you could still find ways to play?`,
      `What token of your burden and tradition do you always carry?`,
      group
    ],
    technique: {name: 'Wall of Perfection', url: 'Playbooks/Icon/WallOfPerfection'},
    demeanors: ['Naive', 'Playful', 'Needy', 'Sad', 'Haughty', 'Grave'],
    connections: [
      [``, `seems to not fully understand what it means that I'm the icon of my tradition… and I kind of like feeling free around them.`],
      [``, `makes me feel better about my responsibilities and my burden with a smile and a few kind words.`]
    ]
  },
  Idealist: {
    history: [
      `What tragedy befell you at a young age?`,
      `Who do you hold most responsible for the tragedy? Why?`,
      `Who helped you through your grief? What did they teach you?`,
      `What symbol, heirloom, or mark do you carry to remind you of what you lost?`,
      group
    ],
    technique: {name: 'Disorient', url: 'Playbooks/Idealist/Disorient'},
    demeanors: ['Lonely', 'Compassionate', 'Joyful', 'Grieving', 'Earnest', 'Resolute'],
    connections: [
      [`I recognize some of the pain I have felt inside of`, `; I'm going to try to help them.`],
      [``, `frustrates me so much when they act without thinking about the consequences!`]
    ]
  },
  Pillar: {
    demeanors: ['Confident', 'Lighthearted', 'Critical', 'Stern', 'Gentle', 'Warm'],
    history: [
      `How did you rise to lead a renowned squad or group?`,
      `Who was your closest friend and confidant in the squad?`,
      `Who never thought you deserved to lead the group?`,
      `What uniform, heirloom, or symbol do you carry as a talisman of the group?`,
      group
    ],
    technique: {name: 'Slide Around the Blow', url: 'Playbooks/Pillar/SlideAroundTheBlow'},
    connections: [
      [``,`doesn't really respect my accomplishments; they probably need a lesson or two.`],
      [``, `seems like they would've been a good candidate to be a part of my squad; I'll look after them.`]
    ]
  },
  Prodigy: {
    demeanors: ['Curious', 'Proud', 'Defensive', 'Resolute', 'Direct', 'Stubborn'],
    history: [
      `When did you first accomplish something your teachers thought would be impossible for you? `,
      `Who gave you the lessons and support you needed to discover your incredible abilities?`,
      `Who cares for you greatly but doesn't understand your talent?`,
      `What strange talisman or detail of your clothing plays a role in your talents?`,
      group
    ],
    technique: {name: 'Steady Stance', url: 'Playbooks/Prodigy/SteadyStance'},
    connections: [
      [``, `could use training from someone who knows what they're doing; I suppose I am up to the task.`],
      [`I'm not sure if the overtures of friendship from`, `make me happy, mad, or both.`]
    ]
  },
  Rogue: {
    demeanors: ['Acerbic', 'Joking', 'Cynical', 'Sly', 'Extreme', 'Wild'],
    history: [
      `How did you come to feel that the only way to survive was to break the rules?`,
      `Who kept trying to reach a kind hand out towards you, only to be rebuffed?`,
      `Who was ready to do anything to break you of your bad habits?`,
      `What is your favorite possession that you stole, swiped, or otherwise acquired illegitimately?`,
      group
    ],
    technique: {name: 'Sweep the Leg', url: 'Playbooks/Rogue/SweepTheLeg'},
    connections: [
      [``, `is waaaaay too uptight, too trapped in themselves; they need to break some rules!`],
      [``, `is amazing and I hope they like me; maybe they're worth playing it straight?`]
    ]
  },
  Successor: {
    demeanors: ['Perky', 'Intense', 'By-the-book', 'Casual', 'Arrogant', 'Oblivious'],
    history: [
      `Who is the current head of your lineage? How do you love and frustrate each other?`,
      `What close member of your lineage wants to revolutionize it?`,
      `What do you carry that reminds you of the place most associated with your lineage?`,
      `What part of your lineage's identity is most important and valuable to you as a person?`,
      group
    ],
    technique: {name: 'Break', url: 'Playbooks/Successor/Break'},
    connections: [
      [``, `has major concerns, fears, or grievances with my lineage — and with me, by proxy.`],
      [``,`seems free of their past in a way I wish I could let go of mine; hearing them talk about the future feels amazing!`]
    ]
  },
  Destined: {
    demeanors: ['Eager', 'Solemn', 'Haunted', 'Uncertain', 'Jocular', 'Watchful'],
    history: [
      `When did you realize you were marked by supernatural forces?`,
      `Who envies your destiny and seeks to seize it from you? Why can't you let that happen?`,
      `Who do you turn to for guidance when you feel overwhelmed by your destiny?`,
      `What token or symbol do you carry that proves to any observer that you are chosen by fate?`,
      group
    ],
    technique: {name: 'Anticipate', url: 'Playbooks/Destined/Anticipate'},
    connections: [
      [`I believe`, `will play a crucial role in my fulfillment of my destiny, for good or ill.`],
      [`Being around`, `helps me put my destiny out of my mind, for a time. Why?`]
    ]
  },
  Elder: {
    demeanors: ['Diligent', 'Kindly', 'Bemused', 'Dour', 'Distant', 'Irascible'],
    history: [
      `What great legacy did you inherit decades ago and recently relinquish?`,
      `Who has never forgiven you for decisions you made years ago?`,
      `Who is still your ally and confidante, despite the tense history you've shared?`,
      `What outfit or uniform do you wear to remind yourself of your former duties?`,
      group
    ],
    technique: {name: 'Patience', url: 'Playbooks/Elder/Patience'},
    connections: [
      [`I care about`, `more than they know...even though they are probably my most frustrating student.`],
      [``, `is not to be underestimated. In fact, they may have something to teach me!`]
    ]
  },
  Foundling: {
    demeanors: ['Caring', 'Dedicated', 'Friendly', 'Modest', 'Respectful', 'Shy'],
    history: [
      `How and when did you learn about your second heritage?`,
      `Who in your family insists you focus on upholding 
      the family heritage?`,
      `Who helped you understand that your two trainings can 
      complement each other?`,
      `What detail of your clothing or visible trinket reveals you belong 
      to two cultures?`,
      group
    ],
    technique: {name: 'Feel the Flow', url: 'Playbooks/Foundling/FeelTheFlow'},
    connections: [
      [``, `seems to think one of my heritages should be valued more; there's something persuasive in their words.`],
      [``, `is so awesome, with skills and heritage I've never seen! I want to learn all I can about them and their background`]
    ]
  },
  Razor: {
    demeanors: ['Childish', 'Fierce', 'Imperious', 'Overbearing', 'Proper', 'Strange'],
    history: [
      `Why were you chosen to be honed, perfected, and used by your masters?`,
      `Who was the former master you were closest to?`,
      `Who helped give you the will you needed to break with your 
      masters and be something more?`,
      `What totem of your masters can you not bring yourself to throw away?`,
      group
    ],
    technique: {name: 'Lure', url: 'Playbooks/Razor/Lure'},
    connections: [
      [``, `seems to be able to connect to other people openly, freely, and easily. I wish they would show me how.`],
      [`I see`, `as lacking control. Maybe I can help hone them, at least a little bit.`]
    ]
  }
}