import type { FieldPath, WhereFilterOp } from 'firebase/firestore'

/** Get the allowable notes for this user/campaign. Agruments match 'where' function from firestore. */
export async function get_notes_where(
    campaign,
    field: string | FieldPath,
    operator: WhereFilterOp,
    value: any
  ): Promise<any[]> {

  const campaignID = localStorage.getItem('campaignID')
  const { db, isSignedIn } = await import('$lib/firebase')
  const { collection, query, where, getDocs } = await import('firebase/firestore')

  const user = await isSignedIn()
  const roles = campaign.users[user.uid]
  const q = query(
    collection(db, 'notes'),
    where('viewers','array-contains-any', [user.uid, ...roles]),
    where('campaign','==', campaignID),
    where(field, operator, value)
  )

  const querySnapshot = await getDocs(q)
  const res = []
  querySnapshot.forEach((doc) => {
    res.push({...doc.data(), objectID: doc.id})
  })
  return res
}