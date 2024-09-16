import { createStore } from "solid-js/store"
import { store } from "./IndexedDBStores";

// Initialize store
export const [getUserStore, setUserStore] = createStore({
    name: "",
    id: 0
})

export function loadUserFromPersistentStorage() {
    if (store.array.find((element) => element.User) === undefined) {
        setTimeout(synchronizeUserStore, 5000)
    }

    function synchronizeUserStore() {
        const transaction = store.array.find((element) => element.User).User

        // non-reactive IndexedDB value to reactive SolidJS signal
        transaction.openCursor("username").onerror = function () {
            setUserStore("name", "Username")
            console.log(getUserStore)
        }.onsuccess = function (event) {
            setUserStore("name", event.target.result)
        };

        transaction.openCursor("userid").onsuccess = function (event) {
            setUserStore("id", event.target.result)
        };
        transaction.openCursor("username").onerror = function () {
            setUserStore("id", 111)
        }
    }
}