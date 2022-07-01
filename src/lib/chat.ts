import { writable } from "svelte/store";
import { arrayify } from "./notes";

var unsub

function createStore() {
  const {subscribe, set} = writable([])

  return {
    subscribe,
    set: async (campaign) => {
      const { db, isSignedIn } = await import('./firebase')
      const { onSnapshot, collection, query, where, orderBy, limit } = await import ('firebase/firestore')
      const { uid } = await isSignedIn()
      if (!campaign) {return}
      return new Promise((resolve) => {
        if (unsub) {unsub()}
        const q = query(
          collection(db, 'notes'),
          where('campaign', '==', campaign),
          where('tags', 'array-contains', 'chat'),
          orderBy('created', 'desc'),
          limit(100)
        )
        unsub = onSnapshot(q, (snapshot) => {
          set(arrayify(snapshot))
          resolve('chat has loaded')
        })
      })
    },
    clear: () => {
      if (unsub) {unsub()}
      unsub = undefined
      set(null)
    }
  }
}
export const chat = createStore()