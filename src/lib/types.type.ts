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
  }[]
}

export type User = {
  displayName: string
}