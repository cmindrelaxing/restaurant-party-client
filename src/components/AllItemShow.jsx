
import PropTypes from 'prop-types';
import '../index.css';
import { Link } from 'react-router-dom';

const AllItemShow = ({food}) => {

    const { name, image, description, price, category} = food || {};

    return (
        <div>
            <div className='bg-[#222831] text-white rounded-lg md:rounded-xl rounded-bl-lg rounded-br-lg '>
                <div className='bg-[#F1F2F3] py-10 rounded-tl-lg rounded-tr-lg rounded-bl-3xl w-full'>
                    <img className='mx-auto w-[150px] h-[150px]' src={image} alt="" />
                </div>
                <div className='space-y-4 p-5'>
                    <h2>{name}</h2>
                    <div className='min-h-[100px]'>
                    {
                        description.length > 150 
                        ?
                        <p className=""><small>{description.slice(0, 160)}.
                        <Link  
                        className="text-[#5dff33] font-bold"> Read More...
                        </Link> </small></p>
                        :
                        <p><small>{description}</small></p>
                    }
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold flex items-center gap-1'>$ {price}</p>
                        <p>{category}</p>
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