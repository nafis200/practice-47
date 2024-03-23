import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJob } from "../../utility/Localstorage";



const AppliedJobs = () => {
    const jobs = useLoaderData()

    const [appliedJobs, setAppliedjobs] = useState([])

    useEffect(()=>{
        const storedJobsIds = getStoredJob()
        if(jobs.length > 0){
           const jobsApplied = [];
           for(const id of storedJobsIds){
             const job = jobs.find(job => job.id === id);
             if(job){
                jobsApplied.push(job)
             }
           }
        //    console.log(jobs,storedJobsIds,jobsApplied);
        setAppliedjobs(jobsApplied)
        }
    },[])
    

    return (
        <div>
            <h2>Jobs I applied:{appliedJobs.length}</h2>
        </div>
    );
};

export default AppliedJobs;