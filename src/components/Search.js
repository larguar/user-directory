import React, {useContext} from 'react';
import Users from '../util/Users';

function Search() {
    const context = useContext(Users);
    return (
        <form>
            <input
                className="form-control mr-sm-2" 
                type="search" 
                placeholder="Search for an Employee" 
                aria-label="Search" 
                onChange={event => context.handleSearchChange(event)} 
            />
        </form>
    );
}

export default Search;