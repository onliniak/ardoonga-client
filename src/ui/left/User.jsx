import { loadUserFromPersistentStorage } from "@/stores/User"
import "./User.scss"

const user = loadUserFromPersistentStorage()

export default function User() {
    return (
        <p>
            { user.name }
            <span class="B3261E-container-float">{ user.id }</span>
        </p>
    )
}