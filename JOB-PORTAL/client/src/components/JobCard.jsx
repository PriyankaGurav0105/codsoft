/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom"
import { assets } from "../assets/assets"

const JobCard = ({job}) => {

  const navigate = useNavigate()

  return (
    <div className="border p-6 shadow rounded">
        <div className="flex justify-between items-center">
            <img className="h-8" src={assets.company_icon}/>
        </div>
        <h4 className="font-medium text-xl mt-2">{job.title}</h4>
        <div className="flex items-center gap-3 mt-2 text-xs">
            <span className="bg-purple-50 border border-purple-200 px-4 py-1.5 rounded">{job.location}</span>
            <span className="bg-blue-50 border border-blue-200 px-4 py-1.5 rounded">{job.level}</span>
        </div>
        <p className="text-gray-500 text-sm mt-4" dangerouslySetInnerHTML={{__html:job.description.slice(0,150)}}></p>
        <div className="mt-4 flex gap-4 text-sm" >
            <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="bg-purple-700 text-white rounded py-2 px-4">Apply Now</button>
            <button onClick={()=> {navigate(`/apply-job/${job._id}`); scrollTo(0,0)}} className="bg-gray-300 border border-gray-500 rounded px-4 py-2">Learn More</button>
        </div>
    </div>
  )
}

export default JobCard