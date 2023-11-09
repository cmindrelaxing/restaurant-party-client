

import { useLoaderData } from 'react-router';
import '../index.css';
import ChoiceOne from '../components/ChoiceOne';
import { Helmet } from 'react-helmet';

const ChoiceFood = () => {

    const foods = useLoaderData();
    // console.log(foods);

    return (
        <div className=' py-10'>

            <Helmet>
                <title>Favorite Food - Colledtion</title>
            </Helmet>

            <div>
                <h2 className='text-center dancing font-bold text-3xl  mb-5'>Search..</h2>
                <div className='flex justify-center items-center w-1/2 mx-auto mb-14'>
                    <input className=' flex-1 py-2 px-4 border-r-0 rounded-tl-full rounded-bl-full border-2 focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33]' type="search" name="" id="" />
                    <i className=' bg-[#5dff33] text-white py-2 px-5 rounded-tr-full rounded-br-full text-lg bx bx-search-alt-2'></i>
                </div>
            </div>
            <div className='area mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    foods?.map(food => <ChoiceOne key={food._id} food={food}></ChoiceOne>)
                }
            </div>
        </div>
    );
};

export default ChoiceFood;