import { createStore } from "solid-js/store"
import { openDatabase } from "./IndexedDB/DB"

export function loadUserFromPersistentStorage() {
    // Initialize store
    const [getUserStore, ] = createStore({
        name: "",
        id: 0
    })

    console.log(openDatabase("User"))

    // // non-reactive IndexedDB value to reactive SolidJS signal
    // const transaction = openDatabase("User")
    // transaction.openCursor("username").onsuccess = function (event) {
    //     if (event.target.result !== undefined) { // key already exist
    //         setUserStore("name", event.target.result)
    //     } else { // key not exist
    //         setUserStore("name", "Username")
    //     }
    // };
    // transaction.openCursor("userid").onsuccess = function (event) {
    //     if (event.target.result !== undefined) {
    //         setUserStore("id", event.target.result)
    //     } else {
    //         setUserStore("id", 111)
    //     }
    // };

    return getUserStore
}