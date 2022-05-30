
interface Status {
  name: string
  text: string
}

export const Empowered:Status = {
  name: 'Empowered',
  text: ``
}

export const Favored:Status = {
  name: 'Favored',
  text: ``
}

export const Inspired:Status = {
  name: 'Inspired',
  text: ``
}

export const Prepared:Status = {
  name: 'Prepared',
  text: ``
}

export const Doomed:Status = {
  name: 'Doomed',
  text: ``
}

export const Impaired:Status = {
  name: 'Impaired',
  text: ``
}

export const Trapped:Status = {
  name: 'Trapped',
  text: ``
}

export const Stunned:Status = {
  name: 'Stunned',
  text: ``
}

export const positive:Status[] = [Empowered, Favored, Inspired, Prepared]
export const negative:Status[] = [Doomed, Impaired, Trapped, Stunned]