import { doc, onSnapshot } from "firebase/firestore";
import { writable } from "svelte/store";
import { db } from "./firebase";

var unsub

function createStore() {
  const {subscribe, set} = writable(null)

  return {
    subscribe,
    set: (id) => {
      if (unsub) {unsub()}
      unsub = onSnapshot(doc(db, 'campaigns', id), (doc) => {
        set(doc.data())
      })
    }
  }
}
export const campaign = createStore()

export const campaignID = writable(null)