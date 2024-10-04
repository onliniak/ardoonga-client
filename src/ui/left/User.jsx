import { createDexieArrayQuery } from "solid-dexie";
import { For } from "solid-js/web";
import { MainStore } from "../../dexie-stores";

const db = new MainStore();

const this_user = createDexieArrayQuery(() =>
    db.User.toArray()
);

export default function UserInfo() {
    return (
        <For each={this_user}>
            {(User) => (
                <p>
                    {User.name}
                    <span class="B3261E-container-float">{User.id}</span>
                </p>
            )
            }
        </For>
    )
}