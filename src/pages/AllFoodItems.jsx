
import { useLoaderData } from 'react-router-dom';
import '../index.css';
import FoodItem from '../components/FoodItem';

const AllFoodItems = () => {

    const foods = useLoaderData();
    // console.log(foods);

    return (
        <div className='pb-20 pt-10'>
            <div className="area mx-auto">
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 area mx-auto md:px-5 lg:px-0'>
                    {
                        foods?.map(food => <FoodItem key={food._id} food={food}></FoodItem>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoodItems;