import Dexie, { Table } from "dexie";

// https://github.com/faassen/solid-dexie/blob/main/src/DemoApp.tsx

interface User {
    id?: number;
    name: string;
}

export class MainStore extends Dexie {
    // 'friends' is added by dexie when declaring the stores()
    // We just tell the typing system this is the case
    User!: Table<User>;

    constructor() {
        super("Ardoonga"); // Database name
        this.version(1).stores({
            User: "++id, name, age", // Primary key and indexed props
        });
    }
}

const db = new MainStore();
await db.User.count().then(is_empty => {
    if (is_empty == 0) {
        db.User.add({ name: `Friend` });
    }
})