import { callbackSynchronizeIndexedDB } from "@/onPageLoadList";

export function synchronizeIndexedDB_WithStore(table) { //https://stackoverflow.com/a/47931995
    const request = indexedDB.open("Ardoonga", 1);
    request.onerror = (event) => {
        // Generic error handler for all errors targeted at this database's
        // requests!
        console.error(`Database error: ${event.target.error?.message}`);
    };
    request.onsuccess = (event) => {
        const db = event.target.result
        const transaction = db.transaction(table);
        const object_store = transaction.objectStore(table);
        const request2 = object_store.openCursor();
        request2.onsuccess = function (event) {
            let cursor = event.target.result;
            if (cursor) {
                callbackSynchronizeIndexedDB(table, cursor.primaryKey, cursor.value)
                cursor.continue();
            }
            else {
                // no more results
            }
        };
    }
}