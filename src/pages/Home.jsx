import { useLoaderData } from "react-router-dom";
import AllItemShow from "../components/AllItemShow";
import DiscountFood from "../components/DiscountFood";
import WeAreParty from "../components/WeAreParty";
import '../index.css';

const Home = () => {

    const foods = useLoaderData();
    // console.log(foods);

    return (
        <div>
            <DiscountFood></DiscountFood>
            <div className="my-20">
            <h1 className="text-center font-bold text-4xl dancing">Our Menu</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 area mx-auto md:px-5 lg:px-0">
            {
                foods?.length > 6 ? (foods?.slice(0, 6).map(food => <AllItemShow key={food._id} food={food}></AllItemShow>)) 
                :
                foods?.map(food => <AllItemShow key={food._id} food={food}></AllItemShow>)
            }
            </div>
            {/* <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 area mx-auto md:px-5 lg:px-0">
            {
                foods?.map(food => <AllItemShow key={food._id} food={food}></AllItemShow>)
            }
            </div> */}
            <WeAreParty></WeAreParty>
        </div>
    );
};

export default Home;