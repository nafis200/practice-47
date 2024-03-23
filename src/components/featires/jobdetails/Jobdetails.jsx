import { useLoaderData, useParams } from "react-router-dom";


const Jobdetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
  
    const job = jobs.find(job=> job.id === parseInt(id))
    console.log(job);
    
    return (
        <div>
            <h2>Job details of: {job.job_title}</h2>
            <div className="grid  gap-4 grid-cols-4 mt-8">
                <div className="col-span-3 border">
                   <h2 className="text-4xl">Details comming here</h2>
                   <p>{job.company_name}</p>
                </div>

                <div className="border">
                    <h2 className="text-2xl">Side Things</h2>
                    <button className="btn">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;