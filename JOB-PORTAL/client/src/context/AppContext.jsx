/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useEffect, useState } from "react";
import { jobsData } from "../assets/assets";


// Create the context
export const AppContext = createContext();

// Custom Provider Component
export const AppContextProvider = (props) => {

    const [searchFilter, setSearchFilter] = useState({
        title:'',
        location:'',
    });

    const [isSearched, setIsSearched] = useState(false)

    const [jobs, setJobs] = useState([])
    const [showRecruiterLogin, setShowRecruiterLogin ] = useState(false)

    //function to fetch jobs
    const fetchJobs = async()=>{
        setJobs(jobsData)
    }

    useEffect(()=>{
        fetchJobs()
    },[])


    const value = {
        // Define shared state or methods here
        searchFilter, setSearchFilter, isSearched, setIsSearched, setJobs, jobs, showRecruiterLogin, setShowRecruiterLogin
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};
