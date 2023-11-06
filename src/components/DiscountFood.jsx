
import { Link } from 'react-router-dom';
import '../index.css';

const DiscountFood = () => {
    return (
        <div className='my-10'>
            <div className='area grid grid-cols-1 lg:grid-cols-2 gap-5 mx-auto px-4 lg:px-0'>
                <div className='bg-[#222831] box_hover md:flex gap-8 p-8 items-center rounded-lg space-y-5 md:space-y-0'>
                    <div className=' img_box border-[6px] border-[#5dff33] w-[175px] h-[175px] mx-auto md:mx-0 rounded-full overflow-hidden'>
                        <img className=' mx-auto md:mx-0 w-[175px] h-[175px] rounded-full' src="https://i.ibb.co/4WqG4BZ/o1.jpg" alt="" />
                    </div>
                    <div className='space-y-4  text-center md:text-start'>
                        <h2 className='font-bold text-2xl text-white dancing'>Tasty Thursdays</h2>
                        <h1 className='dancing font-bold text-4xl text-white'>20% <span className='text-base'>Off</span></h1>
                        <div className='flex justify-center md:flex-none md:justify-start'>
                            <Link to={'/'}>
                            <button className="bg-[#5dff33] other_btn flex items-center gap-3 text-white py-2 font-semibold hover:bg-yellow-400 hover:text-white px-6 md:px-8 rounded-full">Order Now <i className=' text-xl bx bxs-cart-download' ></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='bg-[#222831] box_hover md:flex gap-8 p-8 items-center rounded-lg space-y-5 md:space-y-0'>
                    <div className=' img_box border-[6px] border-[#5dff33] w-[175px] h-[175px] mx-auto md:mx-0 rounded-full overflow-hidden'>
                        <img className=' mx-auto md:mx-0 w-[175px] h-[175px] rounded-full' src="https://i.ibb.co/Qm7LPcd/o2.jpg" alt="" />
                    </div>
                    <div className='space-y-4  text-center md:text-start'>
                        <h2 className='font-bold text-2xl text-white dancing'>Tasty Thursdays</h2>
                        <h1 className='dancing font-bold text-4xl text-white'>15% <span className='text-base'>Off</span></h1>
                        <div className='flex justify-center md:flex-none md:justify-start'>
                            <Link to={'/'}>
                            <button className="bg-[#5dff33] other_btn flex items-center gap-3 text-white py-2 font-semibold hover:bg-yellow-400 hover:text-white px-6 md:px-8 rounded-full">Order Now <i className=' text-xl bx bxs-cart-download' ></i></button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiscountFood;