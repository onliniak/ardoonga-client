import { searchDatabase } from "./IndexedDB/DB";

export function loadUserFromPersistentStorage() {
    // insertIntoDatabase("User", "userID", 7007)
    // insertIntoDatabase("User", "username", "Bob")

    const keyRangeValue = IDBKeyRange.only("userID")
    searchDatabase("User", keyRangeValue)
}

export function userCallback(IDB){
    IDB.onsuccess = (event) => {
        console.log(event.target.result)
    }
}