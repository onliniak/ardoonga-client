import { getUserStore, loadUserFromPersistentStorage } from "@/stores/User"
import { openDatabase } from "@/stores/IndexedDB/DB"
import "./User.scss"

openDatabase("User")
loadUserFromPersistentStorage()
const user = getUserStore

export default function User() {
    return (
        <p>
            { user.name }
            <span class="B3261E-container-float">{ user.id }</span>
        </p>
    )
}