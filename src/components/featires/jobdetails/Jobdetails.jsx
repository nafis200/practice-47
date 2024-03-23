import { useLoaderData, useParams } from "react-router-dom";
import { saveJobapplication } from "../../../utility/Localstorage";


const Jobdetails = () => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idInt = parseInt(id)
  
    const job = jobs.find(job=> job.id === idInt)


    const handleSave = ()=>{
         console.log('hellow');
         saveJobapplication(idInt)
    }
    
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
                    <button onClick={handleSave} className="btn">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default Jobdetails;