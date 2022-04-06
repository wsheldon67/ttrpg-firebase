import type { Settings as TimeSettings, Time } from "$lib/time/time.type"

export type Element = {
  label: string,
  value: any,
  id: string | number
}

export type Campaign = {
  name: string,
  uid: string,
  users: {
    [index: string]: any
  }[],
  system: '5e'|'starfinder',
  time: {
    settings: TimeSettings,
    current: Time
  }
}

export type User = {
  displayName: string
}