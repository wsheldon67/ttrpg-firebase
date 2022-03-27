export default {
  // TODO every note must have a body, a type, and a name
  // TODO implement 'value' (what is saved) vs 'label'
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
  },

  quick: {
    require: [
      {label: 'body', type: 'textarea'}
    ],
    optional: [
      {label: 'name'}
    ],
    links: []
  }
}