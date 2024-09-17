import { createSignal } from "solid-js";
import { loadUserFromPersistentStorage } from "@/stores/User"
import "./User.scss"

loadUserFromPersistentStorage()

export const [user, setUserArray] = createSignal([]);

export default function User() {
    return (
        <p>
            
            <span class="B3261E-container-float">{ user.result["userID"] }</span>
        </p>
    )
}