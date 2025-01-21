/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";


// Create the context
export const AppContext = createContext();

// Custom Provider Component
export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:'',
    });

    const [isSearched, setIsSearched] = useState(false)


    const value = {
        // Define shared state or methods here
        searchFilter, setSearchFilter, isSearched, setIsSearched
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
