import type { Element, Campaign, User } from "$lib/types.type";
import { get_user } from '$lib/db'

type Result = {
  opts: Element[],
  selected: Element[]
}

export async function get_roles(campaign: Campaign, note:any):Promise<Result> {
  if (!note) {note = {viewers:[]}}
  const { isSignedIn } = await import ('$lib/firebase')
  const { uid } = await isSignedIn()

  // on a new blank note, set the current user as selected


  const uids: string[] = []
  const user_promises: Promise<any>[] = []
  for (let _uid in campaign.users) {
    uids.push(_uid)
    user_promises.push(get_user(_uid))
  }


  const user_elements: Element[] = []
  const user_selected: Element[] = []
  const users: User[] = await Promise.all(user_promises)

  users.forEach((user, index) => {
    if (note.viewers.includes(uids[index]) || uids[index] === uid) {
      user_selected.push({label: user.displayName, value: uids[index], id: uids[index]})
    } else {
      user_elements.push({label: user.displayName, value: uids[index], id: uids[index]})
    }
  })

  return {
    opts: user_elements,
    selected: user_selected
  }
}