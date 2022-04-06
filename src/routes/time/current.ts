import type { Time, Unit } from "$lib/time/time.type"
import type { Campaign } from "$lib/types.type"
import * as time from '$lib/time/change'

var timeout_id

export async function set(to_set:Time) {
  const { doc, updateDoc } = await import ('firebase/firestore')
  const { db } = await import ('$lib/firebase')
  const campaignID = localStorage.getItem('campaignID')
  // if there exists a time request within the last 200ms, cancel that one.
  if (timeout_id) {clearTimeout(timeout_id)}
  // wait 200ms to see if there's any sequential updates
  timeout_id = setTimeout(()=>{
    updateDoc(doc(db, 'campaigns',campaignID),{
      'time.current': to_set
    })
    timeout_id = undefined
  }, 200)
}
export async function set_unit(amt:number, unit:Unit, campaign:Campaign) {
  const {current, settings} = campaign.time
  await set(time.set_unit(current, settings, amt, unit))
}
export async function add(amt:number, unit:Unit, campaign:Campaign) {
  const {current, settings} = campaign.time
  await set(time.add(current, settings, amt, unit))
}
export async function next_day(amt:number, campaign:Campaign) {
  const {current, settings} = campaign.time
  await set(time.next_day(current, settings, amt))
}