import { useEffect } from "react";
import { User } from "../components/Interfaces.ts";

import { useDispatch, useSelector } from "react-redux";
import { setUsers, setError } from "../store/actions.ts";
import { RootState } from "../store/store.ts";

// Custom hook to fetch users data from an API
const useFetchUsers = (link: string) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const FetchUsers = async () => {
            try {
                const response = await fetch(link);
                if (!response.ok) {
                    throw new Error(`Failed with status code ${response.status}`);
                }
                const data: User[] = await response.json();
                dispatch(setUsers(data));  // Dispatching action to set users data
            } catch (error: any) {
                dispatch(setError(error.message)); // Dispatching action to set error
            }
        }
        FetchUsers();
    }, [dispatch, link]);

    // Selecting users and error from the state
    const { users, error } = useSelector((state: RootState) => state.result.result);
    return { users, error };
}

export default useFetchUsers;
