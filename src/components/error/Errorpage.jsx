import { Link } from "react-router-dom";



const Errorpage = () => {
    return (
        <div className="bg-red-400">
            <h2>Opps!!!!!</h2>
            <button className="btn mt-[400px]"><Link to="/">Go back</Link></button>
        </div>
    );
};

export default Errorpage;