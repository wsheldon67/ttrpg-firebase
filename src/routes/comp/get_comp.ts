import type {Article} from './compendium.type'
export function get_comp_promise(system:string, path:string) {
  return async function():Promise<Article> {
    const {db} = await import ('$lib/firebase')
    const { collection, query, where, getDocs } = await import ('firebase/firestore')
    const q = query(
      collection(db, 'compendium'),
      where('system','==', system),
      where('url', '==', path)
    )
    const snapshot = await getDocs(q)
    let res
    snapshot.forEach((doc) => {
      res = doc.data()
    })
    if (!res){
      res = {system: 'Common', path: 'NODBENTRY', quick: `"${path}"" was not found in firestore/compendium`}
    }
    return res
  }
}