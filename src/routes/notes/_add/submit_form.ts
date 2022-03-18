export async function submit_form(e, base_ob, all_links:string[], ty:string) {
  const doc_to_insert = base_ob
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
      [`links.${ty}`]: arrayUnion(docRef.id)
    })
  })
  await batch.commit()
  console.log('doc written with id', docRef.id)
}