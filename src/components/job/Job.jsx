import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const { id,logo,job_title,company_name,remote_or_onsite,location,job_type,salary,job_description,job_responsibility,educational_requirements,experiences,contact_information } = job;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={logo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{job_description}</p>
          <div className="card-actions">
          <Link to ={`/job/${id}`}><button className="btn btn-primary">Apply now</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
