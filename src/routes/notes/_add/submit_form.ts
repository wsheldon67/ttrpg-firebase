let viewers: string[] = []
let links = {}
let all_links: string[] = []

/** Compile form data from all components, add note to server, update linked notes. */
export async function submit_form(e, type:string) {
  const doc_to_insert: any = {type, viewers, links}
  const { isSignedIn, db } = await import ('$lib/firebase')
  const { collection, addDoc, writeBatch, arrayUnion, doc } = await import ('firebase/firestore')
  const { uid } = await isSignedIn()
  doc_to_insert.user = uid
  doc_to_insert.campaign = localStorage.getItem('campaignID')

  const formData = new FormData(e.target.parentNode)
  // @ts-ignore
  for (let entry of formData.entries()) {
    doc_to_insert[entry[0]] = entry[1]
  }
  console.log(doc_to_insert)
  const docRef = await addDoc(collection(db, 'notes'), doc_to_insert)

  // set our links
  const batch = writeBatch(db)
  all_links.forEach((id) => {
    const linkRef = doc(db, 'notes', id)
    batch.update(linkRef, {
      [`links.${type}`]: arrayUnion(docRef.id)
    })
  })
  await batch.commit()
  console.log('doc written with id', docRef.id)
}

/** Add viewers to the note */
export function change_permissions(e){
  viewers = e.detail.map(el => el.value)
}

/** Add a link between this note and another one */
export function add_link(label: string, objectID: string) {
  // add type to this entry
  if (!links[label]){links[label] = []}
  links[label].push(objectID)
  all_links.push(objectID)
  // on submit, need to add types to their linked notes
}

/** Remove a link between this note and another one */
export function remove_link(label: string, objectID: string) {
  links[label] = links[label].filter(el => el !== objectID)
  all_links = all_links.filter(el => el !== objectID)
}