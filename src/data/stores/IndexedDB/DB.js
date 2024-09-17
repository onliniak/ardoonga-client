import { userCallback } from "../User";

// https://javascript.info/indexeddb#transactions
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

export function insertIntoDatabase(ObjectStore, key, value) { //ToDO: Refactor DRY
    const request = indexedDB.open("Ardoonga", 1);
    request.onerror = (event) => {
        // Generic error handler for all errors targeted at this database's
        // requests!
        console.error(`Database error: ${event.target.error?.message}`);
    };
    request.onsuccess = (event) => {
        event.target.result
            .transaction(ObjectStore, "readwrite")
            .objectStore(ObjectStore)
            .add(value, key);
    }
    request.onupgradeneeded = (event) => {
        const objectStore = event.target.result.createObjectStore(ObjectStore)
        objectStore.transaction.oncomplete = () => {

            event.target.result
                .transaction(ObjectStore, "readwrite")
                .objectStore(ObjectStore)
                .add(value, key);
        }
    }
}

export function searchDatabase(ObjectStore, IDBKeyRange) {
    let db;

    // if (store.array.find((element) => element.User) === undefined) {
    //     setTimeout(synchronizeUserStore, 5000)
    // } For array of objects

    const request = indexedDB.open("Ardoonga", 1);
    request.onerror = (event) => {
        // Generic error handler for all errors targeted at this database's
        // requests!
        console.error(`Database error: ${event.target.error?.message}`);
    };
    request.onsuccess = (event) => {
        db = event.target.result
            .transaction(ObjectStore, "readonly")
            .objectStore(ObjectStore)
            .get(IDBKeyRange);
        userCallback(db)
    }
    request.onupgradeneeded = (event) => {
        // Save the IDBDatabase interface
        db = event.target.result;

        // Create an objectStore for this database
        const objectStore = db.createObjectStore(ObjectStore) // , { keyPath: "id", autoIncrement: true }
        // Use transaction oncomplete to make sure the objectStore creation is
        // finished before adding data into it.
        objectStore.transaction.oncomplete = () => {
            // Store values in the newly created objectStore.
            const query = db
                .transaction(ObjectStore, "readonly")
                .objectStore(ObjectStore)
                .get(IDBKeyRange);
                //.objectStoreNames;
            userCallback(query)
        };
    }
}