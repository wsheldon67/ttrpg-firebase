import type { Time, Unit } from "./time.type"
import { settle } from "./settle"
import type { Campaign } from "$lib/types.type"

var timeout_id

export async function set(time:Time, campaign:Campaign, as_is?:boolean) {
  const { doc, updateDoc } = await import ('firebase/firestore')
  const { db } = await import ('$lib/firebase')
  const campaignID = localStorage.getItem('campaignID')
  // if there exists a time request within the last 200ms, cancel that one.
  if (timeout_id) {clearTimeout(timeout_id)}
  // wait 200ms to see if there's any sequential updates
  timeout_id = setTimeout(()=>{
    updateDoc(doc(db, 'campaigns',campaignID),{
      'time.current': settle(time, campaign.time.settings, as_is)
    })
    timeout_id = undefined
  }, 200)
}
export async function set_unit(amt:number, unit:Unit, campaign:Campaign) {
  await set({...campaign.time.current, [unit]:amt}, campaign, true)
}
export async function add(amt:number, unit:Unit, campaign:Campaign) {
  const to_set = {...campaign.time.current}
  to_set[unit] += amt
  await set(to_set, campaign, true)
}
export async function next_day(amt:number, campaign:Campaign) {
  const to_set = {...campaign.time.current}
  to_set.day += amt
  const {hour, minute, second} = campaign.time.settings.next_day_time
  to_set.hour = hour
  to_set.minute = minute
  to_set.second = second
  await set(to_set, campaign)
}