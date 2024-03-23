import { useEffect, useState } from "react";
import Job from "../job/Job";


const Featuresjob = () => {
     const [jobs,setJobs] = useState([])
     useEffect(()=>{
         fetch('jobs.json')
         .then(res => res.json())
         .then(data => setJobs(data))
     },[])
    return (
        <div>
            <h2 className="text-7xl text-center">Feature jobs : {jobs.length}</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nesciunt.</p>
            <div>
                {
                    jobs.map(job => <Job key={job.id} job={job} ></Job> )
                }
            </div>

        </div>
    );
};

export default Featuresjob;