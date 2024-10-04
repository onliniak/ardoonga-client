import { insertIntoDatabase } from "./deprecated/stores/IndexedDB/DB";
import { synchronizeIndexedDB_WithStore } from "./deprecated/stores/IndexedDB/getAll";
import { setUser } from "./deprecated/stores/User";

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