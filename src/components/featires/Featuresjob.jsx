import { useEffect, useState } from "react";
import Job from "../job/Job";


const Featuresjob = () => {
     const [jobs,setJobs] = useState([])
     const [datalength, setDatalength] = useState(4)

     useEffect(()=>{
         fetch('jobs.json')
         .then(res => res.json())
         .then(data => setJobs(data))
     },[])
    return (
        <div>
            <h2 className="text-7xl text-center">Feature jobs : {jobs.length}</h2>
            <p className="mt-8">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nesciunt.</p>
            <div className="grid grid-cols-2 gap-6 mt-5">
                {
                    jobs.slice(0,datalength).map(job => <Job key={job.id} job={job} ></Job> )
                }
            </div>
            <div className={datalength === jobs.length && 'hidden'}>
                <button onClick={()=>setDatalength(jobs.length)} className="btn btn-primary mt-5">Show all jobs</button>
            </div>

        </div>
    );
};

export default Featuresjob;