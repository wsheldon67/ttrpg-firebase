
var display_names = {}

export async function get_display_name(uid:string) {
  if (display_names[uid]) {return display_names[uid]}
  const { doc, getDoc } = await import ('firebase/firestore')
  const { db } = await import ('$lib/firebase')
  const docRef = doc(db, 'users', uid)
  const docSnap = await getDoc(docRef)
  display_names[uid] = docSnap.data().displayName
  return display_names[uid]
}

export function isGM(campaign, callback) {
  return async () => {
    const { isSignedIn } = await import('$lib/firebase')
    const {uid} = await isSignedIn()
    callback(campaign.uid === uid)
  }
}