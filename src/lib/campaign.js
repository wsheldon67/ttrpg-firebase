import { doc, onSnapshot } from "firebase/firestore";
import { writable, get } from "svelte/store";
//import { db } from "./firebase";

var unsub

function createStore() {
  const {subscribe, set} = writable(null)

  return {
    subscribe,
    set: async (id) => {
      const { db } = await import('./firebase')
      return new Promise((resolve) => {
        if (unsub) {unsub()}
        unsub = onSnapshot(doc(db, 'campaigns', id), (doc) => {
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