// Interfaces for User, Result and Filters

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
}

interface Result {
    users: User[] | null,
    error: string | null;
}

interface Filters {
    name: string;
    username: string;
    email: string;
    phone: string;
}

export { User, Result, Filters };
