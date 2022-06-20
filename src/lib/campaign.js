import { doc, onSnapshot } from "firebase/firestore";
import { writable } from "svelte/store";

var unsub

function createStore() {
  const {subscribe, set} = writable(null)

  return {
    subscribe,
    set: async (id) => {
      const { db, isSignedIn } = await import('./firebase')
      const { uid } = await isSignedIn()
      console.log(uid, 'would like to access campaign', id)
      if (!id) {return}
      return new Promise((resolve) => {
        if (unsub) {unsub()}
        unsub = onSnapshot(doc(db, `campaigns/${id}`), (doc) => {
          set(doc.data())
          resolve('campaign has loaded')
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
export const campaign = createStore()