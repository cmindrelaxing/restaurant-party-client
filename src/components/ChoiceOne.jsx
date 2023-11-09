import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

const ChoiceOne = ({food}) => {

    const { _id, image, description, price, category} = food || {};

    return (
        <div className="">
            <div className="bg-[#222831]" data-aos="zoom-in-up">
                <div className="py-10 bg-[#F1F2F3]">
                    <img className="w-[150px] h-[150px] mx-auto" src={image} alt="" />
                </div>
                <div className='space-y-4 p-5 text-white'>
                    <h2>{name}</h2>
                    <div className='min-h-[100px]'>
                    {
                        description.length > 150 
                        ?
                        <p className=""><small>{description.slice(0, 160)}.
                        <Link to={`/foods/${_id}`}
                        className="text-[#5dff33] font-bold"> Read More...
                        </Link> </small></p>
                        :
                        <p><small>{description}</small></p>
                    }
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold flex items-center gap-1'>$ {price}</p>
                        <p className='text-[#5dff33]'>{category}</p>
                    </div>
                    <div className='text-center pb-5'>
                    <Link to={`/foods/${_id}`}>
                            <button className="bg-[#5dff33] text-white py-2 font-semibold capitalize hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">Details</button>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

ChoiceOne.propTypes = {
    food: PropTypes.object
};

export default ChoiceOne;