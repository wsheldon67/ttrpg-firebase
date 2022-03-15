import { doc, getDoc } from "firebase/firestore"
import { db } from "./firebase"

export async function get_user (id: string): Promise<any> {
  const docSnap = await getDoc(doc(db, 'users', id))
  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    return {displayName: `User ${id} not found.`}
  }
}