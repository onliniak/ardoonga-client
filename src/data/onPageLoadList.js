import { insertIntoDatabase } from "./stores/IndexedDB/DB";
import { synchronizeIndexedDB_WithStore } from "./stores/IndexedDB/getAll";
import { setUser } from "./stores/User";

export function loadFromPersistentStorage() {
    insertIntoDatabase("User", "id", 7007)
    insertIntoDatabase("User", "name", "Bob")
    synchronizeIndexedDB_WithStore("User")
}

export function callbackSynchronizeIndexedDB(ObjectStore, key, value) {
    switch (ObjectStore) {
        case "User":
            setUser(key, value)
            break;

        default:
            break;
    }
}