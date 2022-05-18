interface Playbooks {
  [Playbook: string]: {
    history: [string, string, string, string, string]
    technique: {name:string, url:string}
  }
}

export const playbooks:Playbooks = {
  Adamant: {
    history: [
      `What experience of being decieved or manipulated convinced you to steel yourself against being swayed by other people?`,
      `Who was your first lodestar, and why were they an exception? Why aren't they your lodestar anymore?`,
      `Who earned your grudging respect by teaching you pragmatism?`,
      `What heirloom or piece of craftsmanship do you carry to remind you to stay true to yourself?`,
      `Why are you committed to this group or purpose?`
    ],
    technique: {name: 'Pinpoint Aim', url: 'Playbooks/Adamant/PinpointAim'}
  },
  Bold: {
    history: [
      `Why do you feel the need to prove yourself so badly?`,
      `Who epitomizes the kind of big, bold figure you hope to be?`,
      `Whose approval do you think you will never attain?`,
      `What token or symbol do you wear to prove you are serious?`,
      `Why are you committed to this group or purpose?`
    ],
    technique: {name: 'Tag Team', url: 'Playbooks/Bold/TagTeam'}
  }
}