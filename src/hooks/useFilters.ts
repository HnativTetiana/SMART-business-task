import { useDispatch, useSelector } from "react-redux";
import { setFilters } from "../store/actions.ts";
import { selectFilteredUsers, selectFilters } from "../store/selector.ts";

// Custom hook to manage filters using Redux
const useFilters = () => {
    const dispatch = useDispatch();
    const filters = useSelector(selectFilters);
    const filteredUsers = useSelector(selectFilteredUsers);

    // Function to handle changes in filter input fields
    const changeFieldsValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        // Dispatching action to update filters
        dispatch(setFilters({
            ...filters,
            [name]: value,
        }));
    }

    return { filteredUsers, changeFieldsValue };
}

export default useFilters;
