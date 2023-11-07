
import PropTypes from 'prop-types';
import '../index.css';
import { Link } from 'react-router-dom';

const AllItemShow = ({food}) => {

    const { _id, name, image, description, price, category, rating} = food || {};

    return (
        <div>
            <div className='box_hover bg-[#222831] text-white rounded-lg md:rounded-xl rounded-bl-lg rounded-br-lg '>
                <div className=' relative img_box bg-[#F1F2F3] py-10 rounded-tl-lg rounded-tr-lg rounded-bl-3xl w-full'>
                    <img className='mx-auto w-[150px] h-[150px]' src={image} alt="" />
                    {
                        rating ?
                        <div className=' absolute top-5 right-5 bg-[#5dff33] w-14 h-14 flex justify-center items-center rounded-full'>
                            <p className='capitalize font-bold dancing text-xl'>{rating}</p>
                        </div>

                        :

                        ''
                    }
                </div>
                <div className='space-y-4 p-5'>
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

AllItemShow.propTypes = {
    food: PropTypes.object
};

export default AllItemShow;