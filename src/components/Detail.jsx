
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

const Detail = ({details}) => {

    console.log(details);
    const { name, price, image, category, description, made, country } = details || {};

    const orderConfirm = () => {
        toast.success('Successfully toasted!')
    };

    return (
        <div className="py-20 space-y-5">
            <div>
                <img className='mx-auto' src={image} alt="" />
            </div>
            <div className='space-y-5 md:px-5'>
                <h2 className='font-bold dancing text-4xl text-[#5dff33]'>{name}</h2>
                <p className=' md:w-4/5 lg:w-1/2 text-sm md:text-base'><span>{description}</span></p>

                {
                    made || country ? 
                    <div className=' md:w-4/5 lg:w-1/2 flex justify-between px-4 md:px-0 items-center gap-10'>
                    {
                        made ? <p className='font-semibold '>Made by : {made}</p> : ''
                    }
                    {
                        country ? <p className='font-semibold'>Food Orign ( Country ): {country}</p> : ''
                    }
                    </div>

                    : 

                    ''
                }

                <div className=' md:w-4/5 lg:w-1/2 flex px-4 md:px-0 items-center gap-10'>
                    <p className='text-3xl dancing font-bold '>$ {price}</p>
                    <p className='font-semibold'>{category}</p>
                </div>

                <div>
                    <button onClick={orderConfirm} className="bg-[#5dff33] text-white py-2 font-semibold capitalize hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">Order Confirm</button>
                </div>
            </div>
        </div>
    );
};

Detail.propTypes = {
    details: PropTypes.object
};

export default Detail;