// https://javascript.info/indexeddb#transactions
// https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB

export function openDatabase(arrayObjectStore, thisObjectStore = arrayObjectStore, access = "readonly") { // access = "readwrite"
    let db;

    const request = indexedDB.open("Ardoonga", 1);
    request.onerror = (event) => {
        // Generic error handler for all errors targeted at this database's
        // requests!
        console.error(`Database error: ${event.target.error?.message}`);
    };
    request.onsuccess = (event) => {db = event.target.result}
    request.onupgradeneeded = (event) => {
        // Save the IDBDatabase interface
        db = event.target.result;

        // Create an objectStore for this database
        const objectStore = db.createObjectStore("User") //, { autoIncrement: true });
        // Use transaction oncomplete to make sure the objectStore creation is
        // finished before adding data into it.
        objectStore.transaction.oncomplete = () => {
            // Store values in the newly created objectStore.
            return db
                .transaction(arrayObjectStore, access)
                .objectStore(thisObjectStore);
        };
    };
}