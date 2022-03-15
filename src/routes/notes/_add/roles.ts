import type { Element, Campaign, User } from "$lib/types.type";
import { get_user } from '$lib/db'

export async function get_roles(campaign: Campaign):Promise<Element[]> {

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

  for (let role in roles) {
    role_elements.push({label: role, value: role, id: role})
  }

  // users
  const user_elements: Element[] = []
  const users: User[] = await Promise.all(user_promises)

  users.forEach((user, index) => {
    user_elements.push({label: user.displayName, value: uids[index], id: uids[index]})
  })

  return [...role_elements, ...user_elements]
}