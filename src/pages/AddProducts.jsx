
import '../index.css';

const AddProducts = () => {

    const addNewItem = e => {
        e.preventDefault();

        const form  = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const image = form.image.value;
        const category = form.category.value;
        const description = form.description.value;

        const productInfo = {name, price, image, category, description};
        console.log(productInfo);
    };

    return (
        <div className=" min-h-screen bg-base-200 flex items-center justify-center py-20 ">
            <div className="hero-content w-full flex-col-reverse md:flex-row justify-center">

                <div className="text-center mb-2 mt-16 md:mt-0">
                    {/* <h1 className="text-5xl font-bold mb-14">Signup now!</h1> */}
                    <img className='lg:w-[85%]' src="https://i.ibb.co/hYHTbB5/about-img.png" alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={addNewItem} className="card-body" data-aos="flip-right">
                        <h2 className="text-2xl font-semibold text-center dancing">Add a New Product</h2>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Name</span>
                        </label>
                        <input type="text" placeholder="Name" name="name" className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Price</span>
                        </label>
                        <input type="text" placeholder="Price" name="price" className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Image</span>
                        </label>
                        <input type="text" placeholder="Example: https://image.jpg" name="image" className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Category</span>
                        </label>
                        <input type="text" placeholder="Category..." name="category" className=" text-xs focus:outline-none focus:border-[2px] focus:border-[#5dff33]  input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text dancing font-bold text-lg">Food Description</span>
                        </label>
                        <textarea  className=' text-xs rounded-lg border-2 focus:outline-none p-4 focus:border-[2px] focus:border-[#5dff33]' name="description" id="" placeholder='Description...' cols="30" rows="5"></textarea>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn text-white py-2 bg-[#5dff33] capitalize hover:bg-black hover:text-white rounded-full">Add new Collection</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;