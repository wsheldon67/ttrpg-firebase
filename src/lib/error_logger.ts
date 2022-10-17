import type { Timestamp } from 'firebase/firestore'

export type LogObject = {
  message:string
  log_type?:string
  filename?:string
  lineno?:number
  colno?:number
}
export type FullLog = LogObject & {
  display_name:string
  uid:string
  timestamp:Timestamp
}

export async function on_error({message, filename, lineno, colno}:ErrorEvent) {
  const short_file = new URL(filename).pathname
  server_log({
    message, filename: short_file, lineno, colno, log_type: 'Error'
  })
}

export async function server_log({message, filename, lineno, colno, log_type}:LogObject) {
  const { collection, addDoc, serverTimestamp } = await import ('firebase/firestore')
  const { db, isSignedIn } = await import ('$lib/firebase')
  const user = await isSignedIn()
  let display_name:string
  let uid:string
  if (user) {
    display_name = user.displayName
    uid = user.uid
  }

  const log_doc = {
    display_name, message, filename, lineno, colno, uid, log_type,
    timestamp: serverTimestamp()
  }

  const docRef = await addDoc(collection(db, 'errors'), log_doc)
  console.log('log sent to db with id', docRef.id)
}