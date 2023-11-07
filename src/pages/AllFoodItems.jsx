
import { useLoaderData } from 'react-router-dom';
import '../index.css';
import FoodItem from '../components/FoodItem';

const AllFoodItems = () => {

    const foods = useLoaderData();
    // console.log(foods);

    return (
        <div className='pb-20 pt-10'>
            <div className="area mx-auto">
                <h1 className='text-center font-bold text-5xl dancing text-[#5dff33] mb-5'>Search Foods...</h1>
                <div className='flex justify-center items-center w-1/2 mx-auto mb-14'>
                    <input className=' flex-1 py-2 px-4 border-r-0 rounded-tl-full rounded-bl-full border-2 focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33]' type="search" name="" id="" />
                    <i className=' bg-[#5dff33] text-white py-2 px-5 rounded-tr-full rounded-br-full text-lg bx bx-search-alt-2'></i>
                </div>
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