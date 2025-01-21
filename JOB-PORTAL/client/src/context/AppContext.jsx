/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";


// Create the context
export const AppContext = createContext();

// Custom Provider Component
export const AppContextProvider = (props) => {
    const value = {
        // Define shared state or methods here
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
