export default {
  npc: {
    require: [
      {label: 'body'}, {label: 'name'}
    ],
    optional: [
      {label: 'CR', type: 'number'}, {label: 'Class'}, {label: 'Race'},
      {label: 'Str', type: 'number'}, {label: 'Dex', type: 'number'},
      {label: 'Int', type: 'number'}, {label: 'Wis', type: 'number'},
      {label: 'Cha', type: 'number'}, {label: 'Con', type: 'number'},
    ],
    links: [
      {label: 'Places', value: 'place'}
    ]
  },
  event: {
    require: [
      {label: 'body'}
    ],
    optional: [
      {label: 'title'}
    ],
    links: [
      {label: 'NPCs', value: 'npc'}, {label: 'Places', value: 'place'}
    ]
  },
  place: {
    require: [],
    optional: [],
    links: []
  }
}