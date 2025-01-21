/* eslint-disable no-unused-vars */
import { useContext } from "react"
import { AppContext } from "../context/AppContext"
import { assets, JobCategories, JobLocations } from "../assets/assets"
import JobCard from "./JobCard"

const JobListing = () => {
    const {isSearched, searchFilter, setSearchFilter, jobs} = useContext(AppContext)
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8 ">
        {/* Sidebar */}

        <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Search filter from hero component */}
        {
            isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                <>
                <h3 className="font-medium text-lg mb-4">Current Search</h3>
                <div className="mb-4 text-gray-600">
                    {searchFilter.title && (
                        <span className="inline-flex items-center gap-3 bg-purple-100 border border-purple-300 px-4 py-1.5 rounded">
                            {searchFilter.title}
                            <img onClick={e => setSearchFilter(prev => ({...prev,title:""}))} src={assets.cross_icon} className="cursor-pointer"/>
                        </span>
                    )}
                    {searchFilter.location && (
                        <span className=" ml-2 inline-flex items-center gap-3 bg-blue-100 border border-blue-300 px-4 py-1.5 rounded">
                            {searchFilter.location}
                            <img onClick={e => setSearchFilter(prev => ({...prev,location:""}))} src={assets.cross_icon} className="cursor-pointer"/>
                        </span>
                    )}
                </div>
                </>
            )

        }
        {/* Category Filter */}
        <div className="max-lg:hidden">
            <h4 className="font-medium text-lg py-4">Search by Categories</h4>
            <ul className="space-y-4 text-gray-600">
                {
                    JobCategories.map((category,index)=>(
                        <li className="flex gap-3 items-center" key={index}>
                            <input className="scale-125 accent-purple-800"  type="checkbox"/>
                            {category}
                        </li>
                    ))
                }
            </ul>
        </div>
        {/* Location Filter */}
        <div className="max-lg:hidden">
            <h4 className="font-medium text-lg py-4 pt-14">Search by Location</h4>
            <ul className="space-y-4 text-gray-600">
                {
                    JobLocations.map((locations, index)=>(
                        <li key={index} className="flex gap-3 items-center">
                            <input className="scale-125 accent-purple-800"  type="checkbox" />
                            {locations}
                        </li>
                    ))
                }
            </ul>
        </div>
        </div>

        {/* Job Listings */}
        <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
            <h3 className="font-medium text-3xl py-2 " id="job-list">Latest jobs</h3>
            <p className="mb-8">Get your desired job from top companies</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {
                    jobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))
                }
            </div>
        </section>

      
    </div>
  )
}

export default JobListing
