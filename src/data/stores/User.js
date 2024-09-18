import { createStore } from "solid-js/store"

// Initialize store
export const [User, setUser] = createStore({
  id: 0,
  name: ""
})