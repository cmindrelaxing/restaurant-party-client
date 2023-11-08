
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';

const Detail = ({details}) => {

    // console.log(details);
    const { name, price, image, category, description, made, country, rating } = details || {};

    const orderNow = (e) => {
        e.preventDefault();

        // const form  = e.target;
        // const name = form.name.value;
        // const yourName = form.yourName.value;
        // const phone = form.phone.value;
        // const email = form.email.value;
        // const price = form.price.value;
        // const image = form.image.value;
        // const category = form.category.value;
        // const description = form.description.value;
        // const orderConfirmInfo = {name, yourName, phone, email, price, image, category, description};
        // console.log(orderConfirmInfo);

        toast.success(`Confirmed successfully ${name}`)
    };


    // console.log(countOrder);

    return (
        <div className="py-20">
            <Helmet>
                <title>Food - Detail Page</title>
            </Helmet>
            <div>
                <img className='mx-auto' src={image} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center gap-5 px-4 mt-20 md:px-5'>
                <div className='space-y-5'>
                    <h2 className='font-bold dancing text-4xl text-[#5dff33]'>{name}</h2>
                    <p className=' text-sm md:text-base'><span>{description}</span></p>

                    {
                        made || country ? 
                        <div className=' flex justify-between px-4 md:px-0 items-center gap-10'>
                        {
                            made ? <p className='font-semibold dancing lg:text-lg text-orange-500'>Made by : {made}</p> : ''
                        }
                        {
                            country ? <p className='font-semibold dancing lg:text-lg text-orange-500'>Food Orign ( Country ): {country}</p> : ''
                        }
                        </div>

                        : 

                        ''
                    }

                    <div className=' flex px-4 md:px-0 items-center gap-10'>
                        <p className='text-3xl dancing font-bold '>$ {price}</p>
                        <p className='font-bold dancing text-3xl'>{category}</p>
                    </div>

                    {/* order count btn */}

                    {/* <div className='flex items-center gap-10'>
                        <button onClick={orderConfirm} className="bg-[#5dff33] text-white py-2 font-semibold capitalize hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">Order Confirm</button>
                        <div className=' bg-[#5dff33] w-10 h-10 flex justify-center items-center rounded-full'>
                            <p className='capitalize font-bold dancing text-white'><small>{countOrder}</small></p>
                        </div>
                    </div> */}
                </div>
                {/* food form */}
                <form onSubmit={orderNow} className="card-body" data-aos="flip-right">
                    <h2 className="text-2xl font-semibold text-center dancing">Update Food</h2>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text dancing font-bold text-lg">Food Name</span>
                    </label>
                    <input type="text" placeholder="Name" name="name" defaultValue={name} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text dancing font-bold text-lg">Food Price</span>
                    </label>
                    <input type="text" placeholder="Price" name="price" defaultValue={price} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text dancing font-bold text-lg">Food Image</span>
                    </label>
                    <input type="text" placeholder="Example: https://image.jpg" name="image" defaultValue={image} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text dancing font-bold text-lg">Food Category</span>
                    </label>
                    <input type="text" placeholder="Category..." name="category" defaultValue={category} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text dancing font-bold text-lg">Top Sell Food</span>
                    </label>
                    <input type="text" placeholder="Top or Hot" name="rating" defaultValue={rating} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" />
                    </div>

                    <div className='md:flex md:justify-between gap-5'>
                        <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Made By</span>
                        </label>
                        <input type="text" placeholder="John" name="made" defaultValue={made} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Orign ( Country )</span>
                        </label>
                        <input type="text" placeholder="Food Orign" name="country" defaultValue={country} className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control">
                    <label className="label">
                        <span className="label-text dancing font-bold text-lg">Food Description</span>
                    </label>
                    <textarea  className=' text-xs rounded-lg border-2 focus:outline-none p-4 focus:border-[2px] focus:border-[#5dff33]' name="description" defaultValue={description} id="" placeholder='Description...' cols="30" rows="5"></textarea>
                    </div>

                    <div className="form-control mt-6">
                    <button className="btn text-white py-2 px-5 bg-[#5dff33] capitalize hover:bg-black hover:text-white rounded-full"> Add Update Collection </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

Detail.propTypes = {
    details: PropTypes.object
};

export default Detail;