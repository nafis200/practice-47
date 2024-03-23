import Banner from "../banner/Banner";
import Category from "../categorylist/Category";
import Featuresjob from "../featires/Featuresjob";


const Home = () => {
    return (
        <div>
            <h2>I am home</h2>
            <Banner></Banner>
            <div className="mt-5">
            <Category></Category>
            <div className="mt-8">
             <Featuresjob></Featuresjob>
            </div>
            </div>
        </div>
    );
};

export default Home;