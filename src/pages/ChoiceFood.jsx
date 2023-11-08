

import { useLoaderData } from 'react-router';
import '../index.css';
import ChoiceOne from '../components/ChoiceOne';

const ChoiceFood = () => {

    const foods = useLoaderData();
    // console.log(foods);

    return (
        <div>
            <div className='area mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-20'>
                {
                    foods?.map(food => <ChoiceOne key={food._id} food={food}></ChoiceOne>)
                }
            </div>
        </div>
    );
};

export default ChoiceFood;