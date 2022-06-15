
export interface Note {
  body: string
  type: string
  title?: string
  tags?: string[]
  [key: string]:any
}

export async function add_note(note:Note) {
  const { collection, addDoc, serverTimestamp } = await import ('firebase/firestore')
  const { db, isSignedIn } = await import ('$lib/firebase')
  const { uid } = await isSignedIn()
  const campaign = localStorage.getItem('campaignID')
  const doc = {
    campaign, user: uid, ...note, created: serverTimestamp()
  }
  await addDoc(collection(db, 'notes'), doc)
}

export async function get_notes_by_tag(tag:string):Promise<Note[]> {
  const { collection, query, where, getDocs, orderBy } = await import ('firebase/firestore')
  const { db } = await import ('$lib/firebase')
  const campaignID = localStorage.getItem('campaignID')
  const q = query(
    collection(db, 'notes'),
    where('campaign','==',campaignID),
    where('tags','array-contains',tag),
    orderBy('created', 'desc')
  )
  const snapshot = getDocs(q)
  return arrayify(snapshot)
}

export async function get_note(id:string):Promise<Note> {
  return
}

export async function get_notes_by_type(type:string):Promise<Note> {
  return
}

export async function update_note(id:string, note:Note) {

}

export async function get_all_notes():Promise<Note[]> {
  const { collection, query, where, getDocs, orderBy } = await import ('firebase/firestore')
  const { db } = await import ('$lib/firebase')
  const campaignID = localStorage.getItem('campaignID')
  const q = query(collection(db, 'notes'), where('campaign','==', campaignID), orderBy('created', 'desc'))
  const snapshot = await getDocs(q)
  return arrayify(snapshot)
}

export function arrayify(snapshot:any):Note[] {
  const res = []
  snapshot.forEach(doc => res.push(doc.data()))
  return res
}