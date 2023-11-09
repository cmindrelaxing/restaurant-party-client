
import '../index.css';

const Review = () => {
    return (
        <div className='mb-20'>
            <div className='area mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                <div className='space-y-10 box_hover'>
                    <div className='bg-[#222831] p-5 space-y-5 rounded-lg' data-aos="zoom-in-up">
                        <p className='text-white'><small>My partner surprised me with a romantic dinner date at a quaint restaurant overlooking the city skyline. The evening was a symphony of flavors, with each course carefully paired with wine. The ambience was enchanting, and the food was a work of art. It was a night to remember, filled with love, laughter, and culinary magic. This experience made me realize that food has the power to create unforgettable moments and deepen connections.</small></p>
                        <div>
                            <h2 className='text-white font-semibold dancing text-3xl'>John</h2>
                        </div>
                    </div>
                    <div className=' img_box img_box border-[6px] border-[#5dff33] w-[130px] h-[130px] mx-auto md:mx-0 rounded-full overflow-hidden' data-aos="zoom-in-up">
                        <img className=' mx-auto md:mx-0 w-[130px] h-[130px] rounded-full' src="https://i.ibb.co/z5kN100/client2.jpg" alt=""  />
                    </div>
                </div>
                <div className='space-y-10 box_hover'>
                    <div className='bg-[#222831] p-5 space-y-5 rounded-lg' data-aos="zoom-in-up">
                        <p className='text-white'><small>My partner surprised me with a romantic dinner date at a quaint restaurant overlooking the city skyline. The evening was a symphony of flavors, with each course carefully paired with wine. The ambience was enchanting, and the food was a work of art. It was a night to remember, filled with love, laughter, and culinary magic. This experience made me realize that food has the power to create unforgettable moments and deepen connections.</small></p>
                        <div>
                            <h2 className='text-white font-semibold dancing text-3xl'>John</h2>
                        </div>
                    </div>
                    <div className=' img_box img_box border-[6px] border-[#5dff33] w-[130px] h-[130px] mx-auto md:mx-0 rounded-full overflow-hidden' data-aos="zoom-in-up">
                        <img className=' mx-auto md:mx-0 w-[130px] h-[130px] rounded-full' src="https://i.ibb.co/n0Td0GR/client1.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;