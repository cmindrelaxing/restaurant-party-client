
import { Link } from 'react-router-dom';
import '../index.css';

const WeAreParty = () => {
    return (
        <div className='bg-[#222831] py-20 my-20'>
            <div className='area mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-4 lg:px-0 md:gap-5 lg:gap-10'>
                <img className='w-[80%] mx-auto mb-14 md:mb-0' src="https://i.ibb.co/hYHTbB5/about-img.png" alt="" data-aos="zoom-in-up" />
                <div className=' space-y-5' data-aos="zoom-in-up">
                    <h2 className='font-bold text-4xl text-white dancing'>We Are Party</h2>
                    <p className='text-white'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text. All</p>
                    <div>
                        <Link className='m-0 p-0' to={'/'}>
                        <button className="bg-[#5dff33] other_btn flex items-center gap-3 text-white py-2 font-semibold hover:bg-yellow-400 hover:text-white px-6 md:px-8 rounded-full">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeAreParty;