
// const AddProducts = () => {
//     return (
//         <div>
//             Add Products
//         </div>
//     );
// };

// export default AddProducts;


import '../index.css';
import { Link } from "react-router-dom";



const AddProducts = () => {

    const signup = e => {
        e.preventDefault();

        const form  = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const signupInfo = {name, email, password};
        console.log(signupInfo);

        // Validate email and password
        
    };


    // google sign up
    


    // github sign up page
    
    

    return (
        <div className=" min-h-screen bg-base-200 flex items-center justify-center py-10 ">
            <div className="hero-content w-full flex-col-reverse md:flex-row justify-center">

                <div className="text-center mb-2 mt-16 md:mt-0">
                    {/* <h1 className="text-5xl font-bold mb-14">Signup now!</h1> */}
                    <img className='lg:w-[85%]' src="https://i.ibb.co/hYHTbB5/about-img.png" alt="" />
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={signup} className="card-body" data-aos="flip-right">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name" name="name" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name="email" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        </div>

                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" placeholder="password" name="password" className="focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33] input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                        </div>

                        <div className="form-control mt-6">
                        <button className="btn text-white py-2 bg-[#5dff33] hover:bg-black hover:text-white rounded-full">Signup</button>
                        </div>

                        <p className="text-center mt-4"><small>Already Have an account <Link to="/login" className="text-blue-600 font-bold">Login</Link></small></p>

                        <div>
                            <h2 className="text-2xl font-semibold text-center dancing">Signup with</h2>
                            <div className="flex justify-between items-center mt-5 gap-3">
                                <button className="flex items-center font-medium bg-[#5dff33] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-google text-black' ></i><span className="text-black">G</span>oogle</button>
                                <button className="flex items-center font-medium bg-[#5dff33] text-white py-2 hover:bg-black hover:text-white px-8 rounded-full"><i className='mr-2 bx bxl-github text-black' ></i><span className="text-black">G</span>ithub</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProducts;