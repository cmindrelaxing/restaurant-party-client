
import { Link } from 'react-router-dom';
import '../index.css';

const Banner = () => {
    return (
      <div className="carousel w-full h-[400px] md:h-screen mb-10">
      
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/LxrhK51/hero-bg.jpg"
            className="w-full"
          />
          <div className="absolute flex items-center px-5 md:px-0 lg:px-0 md:pl-10 lg:pl-10 justify-end  h-full bottom-0 gap-3 lg:gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
            <div className=" space-y-3 md:space-y-5 lg:space-y-7">
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold dancing">Fast Food Restaurant</h2>
              <p className=" text-white text-sm md:text-base lg:text-lg md:w-[522px]"><span>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</span></p>
              <div>
                <Link>
                    <button className="bg-[#5dff33] text-white py-2 font-semibold hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">Order Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform left-5 right-5 bottom-5 gap-3 lg:gap-5">
            <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white text-base">
              {/* ❮ */}
              <i className='bx bx-arrow-back'></i>
            </a>
            <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white text-base">
              {/* ❯ */}
              <i className='rotate-180 bx bx-arrow-back'></i>
            </a>
          </div>
        </div>
      
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/LxrhK51/hero-bg.jpg"
            className="w-full"
          />
          <div className="absolute flex items-center px-5 md:px-0 lg:px-0 md:pl-10 lg:pl-10 justify-end  h-full xl:rounded-xl  bottom-0 gap-3 lg:gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
            <div className=" space-y-3 md:space-y-5 lg:space-y-7">
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold dancing">Fast Food Restaurant</h2>
              <p className=" text-white text-sm md:text-base lg:text-lg md:w-[522px]"><span>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</span></p>
              <div>
                <Link>
                    <button className="bg-[#5dff33] text-white py-2 font-semibold hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">Order Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform left-5 right-5 bottom-5 gap-3 lg:gap-5">
            <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white text-base">
              {/* ❮ */}
              <i className='bx bx-arrow-back'></i>
            </a>
            <a href="#slide3" className="btn btn-circle hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white text-base">
              {/* ❯ */}
              <i className='rotate-180 bx bx-arrow-back'></i>
            </a>
          </div>
        </div>
  
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/LxrhK51/hero-bg.jpg"
            className="w-full"
          />
          <div className="absolute flex items-center px-5 md:px-0 lg:px-0 md:pl-10 lg:pl-10 justify-end  h-full xl:rounded-xl  bottom-0 gap-3 lg:gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%)]">
            <div className=" space-y-3 md:space-y-5 lg:space-y-7">
              <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold dancing">Fast Food Restaurant</h2>
              <p className=" text-white text-sm md:text-base lg:text-lg md:w-[522px]"><span>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</span></p>
              <div>
                <Link>
                    <button className="bg-[#5dff33] text-white py-2 font-semibold hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">Order Now</button>
                </Link>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-end transform left-5 right-5 bottom-5 gap-3 lg:gap-5">
            <a href="#slide2" className="btn btn-circle hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white text-base">
              {/* ❮ */}
              <i className='bx bx-arrow-back'></i>
            </a>
            <a href="#slide1" className="btn btn-circle hover:bg-[#FF3811] hover:border-[#FF3811] hover:text-white text-base">
              {/* ❯ */}
              <i className='rotate-180 bx bx-arrow-back'></i>
            </a>
          </div>
        </div>
        
      </div>
    );
  };
  
export default Banner;
  