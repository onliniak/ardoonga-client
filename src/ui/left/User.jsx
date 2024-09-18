import { User } from "@/stores/User"
import "./User.scss"

export default function UserInfo() {
    return (
        <p>
            { User.name }
            <span class="B3261E-container-float">{ User.id }</span>
        </p>
    )
}