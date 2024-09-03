import { User, Filters } from "../components/Interfaces.ts";

interface UserState {
    result: {
        users: User[] | null,
        error: string | null;
    }
    filteredUsers: User[];
    filters: Filters;
}

// Initial state for the user management system
const initialState: UserState = {
    result: {
        users: [],
        error: null,
    },
    filteredUsers: [],
    filters: {
        name: "",
        username: "",
        email: "",
        phone: "",
    },
}

export default initialState;
