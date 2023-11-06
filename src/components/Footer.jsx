
import { Link } from 'react-router-dom';
import '../index.css';

const Footer = () => {
    return (
        <div className='bg-[#222831] pb-10 md:pb-6 pt-14'>
            <div className=' px-5 lg:px-0 text-white'>
                <div className="area mx-auto grid grid-cols-1 md:grid-cols-3">
                    <div className='mb-16 md:mb-0'>
                        <h2 className='dancing text-white font-semibold text-3xl'>Contact Us</h2>
                        <div className='mt-5 space-y-2 social'>
                            <p className='hover:text-[#ffbe33] open_sans'><i className=' bx bxs-edit-location'></i> <span>Location</span> </p>
                            <p className='hover:text-[#ffbe33] open_sans'><i className=' bx bxs-phone-call'></i> <span>Call +01 400886906</span> </p>
                            <p className='hover:text-[#ffbe33] open_sans'><i className=' bx bxs-envelope'></i> <span>cmindrelaxing1@gmail.com</span> </p>
                        </div>
                    </div>
                    <div className='text-center mb-16 md:mb-0'>
                        <h2 className='dancing text-white font-semibold text-3xl'>Restaurant Party</h2>
                        <div className='mt-5 space-y-3 social'>
                            <p className='open_sans'><span>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</span> </p>
                            <div className='flex justify-center gap-3'>
                                <Link className='bg-white text-black hover:text-[#ffbe33]  w-9 h-9 flex justify-center items-center rounded-full'><i className=' text-xl bx bxl-facebook' ></i></Link>
                                <Link className='bg-white text-black hover:text-[#ffbe33]  w-9 h-9 flex justify-center items-center rounded-full'><i className=' text-xl bx bxl-twitter' ></i></Link>
                                <Link className='bg-white text-black hover:text-[#ffbe33]  w-9 h-9 flex justify-center items-center rounded-full'><i className=' text-xl bx bxl-linkedin' ></i></Link>
                                <Link className='bg-white text-black hover:text-[#ffbe33]  w-9 h-9 flex justify-center items-center rounded-full'><i className=' text-xl bx bxl-instagram' ></i></Link>
                                <Link className='bg-white text-black hover:text-[#ffbe33]  w-9 h-9 flex justify-center items-center rounded-full'><i className=' text-xl bx bxl-pinterest' ></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className='text-right'>
                        <h2 className='dancing text-white font-semibold text-3xl'>Opening Hours</h2>
                        <div className='mt-5 space-y-2 social'>
                            <p className=' open_sans'> <span>Everyday</span> </p>
                            <p className=' open_sans'> <span>10.00 Am -10.00 Pm</span> </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-8 md:mt-6'>
                <small className='text-white open_sans'>Copyright &copy; Restaurant Party. All Rights Reseved.</small>
            </div>
        </div>
    );
};

export default Footer;