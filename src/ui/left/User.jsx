import { createSignal } from "solid-js";
import { loadUserFromPersistentStorage } from "@/stores/User"
import "./User.scss"

loadUserFromPersistentStorage()

export const [userName, setUserName] = createSignal("");
export const [userID, setUserID] = createSignal(0);

export default function User() {
    return (
        <p>
            { userName }
            <span class="B3261E-container-float">{ userID }</span>
        </p>
    )
}