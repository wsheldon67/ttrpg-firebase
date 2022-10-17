

export async function on_error(event:ErrorEvent) {
  const {message, filename, lineno, colno} = event
  const { collection, addDoc, serverTimestamp } = await import ('firebase/firestore')
  const { db, isSignedIn } = await import ('$lib/firebase')
  const user = await isSignedIn()
  let display_name
  let uid
  if (user) {
    display_name = user.displayName
    uid = user.uid
  }

  const short_file = new URL(filename).pathname

  const error_doc = {
    display_name, message, filename: short_file, lineno, colno, uid,
    timestamp: serverTimestamp()
  }

  const docRef = await addDoc(collection(db, 'errors'), error_doc)
  console.log('error sent to db with id', docRef.id)
}