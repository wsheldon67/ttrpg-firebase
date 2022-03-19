import type { Element, Campaign, User } from "$lib/types.type";
import { get_user } from '$lib/db'

type Result = {
  opts: Element[],
  selected: Element[]
}

export async function get_roles(campaign: Campaign, note:any):Promise<Result> {
  if (!note) {note = {viewers:[]}}
  const roles = {}

  // users
  const uids: string[] = []
  const user_promises: Promise<any>[] = []
  for (let uid in campaign.users) {
    uids.push(uid)
    user_promises.push(get_user(uid))

    // roles
    campaign.users[uid].forEach((role: string) => {
      roles[role] = true
    })
  }

  // roles
  const role_elements: Element[] = []
  const role_selected: Element[] = []

  for (let role in roles) {
    if (note.viewers.includes(role)) {
      role_selected.push({label: role, value: role, id: role})
    } else {
      role_elements.push({label: role, value: role, id: role})
    }
  }

  // users
  const user_elements: Element[] = []
  const user_selected: Element[] = []
  const users: User[] = await Promise.all(user_promises)

  users.forEach((user, index) => {
    if (note.viewers.includes(uids[index])) {
      user_selected.push({label: user.displayName, value: uids[index], id: uids[index]})
    } else {
      user_elements.push({label: user.displayName, value: uids[index], id: uids[index]})
    }
  })

  return {
    opts: [...role_elements, ...user_elements],
    selected: [...role_selected, ...user_selected]
  }
}