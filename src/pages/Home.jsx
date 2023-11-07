import { Link, useLoaderData } from "react-router-dom";
import AllItemShow from "../components/AllItemShow";
import DiscountFood from "../components/DiscountFood";
import WeAreParty from "../components/WeAreParty";
import '../index.css';
import Banner from "../components/Banner";
import Review from "../components/Review";

const Home = () => {

    const foods = useLoaderData();
    // console.log(foods);

    return (
        <div>
            <Banner></Banner>
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
            <div className='text-center pt-20 '>
                <Link to={'/allFoodItems'}>
                        <button className="bg-[#5dff33] text-white py-2 font-semibold capitalize hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">see all Food</button>
                </Link>
            </div>
            <WeAreParty></WeAreParty>
            <Review></Review>
        </div>
    );
};

export default Home;