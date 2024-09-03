import React from "react";

// Component to render input fields for filtering users
const FiltersList = ({ changeFieldsValue }) => {
    return (
        <ul className='filters-list'>
            <li>
                <input type='text' placeholder='Filter by name' name="name" onChange={changeFieldsValue} />
            </li>
            <li>
                <input type='text' placeholder='Filter by username' name="username" onChange={changeFieldsValue} />
            </li>
            <li>
                <input type='text' placeholder='Filter by email' name="email" onChange={changeFieldsValue} />
            </li>
            <li>
                <input type='text' placeholder='Filter by phone' name="phone" onChange={changeFieldsValue} />
            </li>
        </ul>
    )
}

export default FiltersList;
