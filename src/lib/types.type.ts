export type Element = {
  label: string,
  value: any,
  id: string | number
}

export type Campaign = {
  name: string,
  uid: string,
  users: {
    [index: string]: string[] | any
  }[],
  system: '5e'|'starfinder'
}

export type User = {
  displayName: string
}