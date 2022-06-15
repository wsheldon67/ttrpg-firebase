
export interface Note {
  body: string
  type: string
  title?: string
  tags?: string[]
  [key: string]:any
}

export async function add_note(note:Note, log:boolean = false, gm:boolean = false) {
  const { collection, addDoc, serverTimestamp } = await import ('firebase/firestore')
  const { db, isSignedIn } = await import ('$lib/firebase')
  const { uid } = await isSignedIn()
  const campaign = localStorage.getItem('campaignID')
  const doc = {
    campaign, user: uid, ...note, created: serverTimestamp(),
    gm, log
  }
  await addDoc(collection(db, 'notes'), doc)
}

export function arrayify(snapshot:any):Note[] {
  const res = []
  snapshot.forEach(doc => res.push({id: doc.id, ...doc.data()}))
  return res
}

export function subscribe_to_log(callback:Function, gm:boolean = false, desc:boolean = false, _limit:number = 100) {
  return async () => {
    const { onSnapshot, collection, query, where, orderBy, limit } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const campaign = localStorage.getItem('campaignID')
    console.log(campaign)
    const q = query(
      collection(db, 'notes'),
      where('campaign', '==', campaign),
      where('log', '==', true),
      where('gm', '==', gm),
      orderBy('created', desc ? 'desc' : 'asc'),
      limit(_limit)
    )
    return onSnapshot(q, (snapshot) => {
      const res = arrayify(snapshot)
      callback(res)
    })
  }
}

export function subscribe_by_user_tag(user_tag:string, callback:Function, gm:boolean = false, desc:boolean = false, _limit:number = 100) {
  return async () => {
    const { onSnapshot, collection, query, where, orderBy, limit } = await import ('firebase/firestore')
    const { db } = await import ('$lib/firebase')
    const campaign = localStorage.getItem('campaignID')
    console.log(campaign)
    const q = query(
      collection(db, 'notes'),
      where('campaign', '==', campaign),
      where('user_tags', 'array-contains', user_tag),
      where('gm', '==', gm),
      where('log', '==', true),
      orderBy('created', desc ? 'desc' : 'asc'),
      limit(_limit)
    )
    return onSnapshot(q, (snapshot) => {
      const res:Note[] = arrayify(snapshot)
      callback(res)
    })
  }
}