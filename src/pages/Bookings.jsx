

import BookingRow from "../components/BookingRow";
import { useLoaderData } from "react-router";


const Bookings = () => {

    const bookings = useLoaderData();


    const bookingsBanner = {
        backgroundImage: 'url(https://i.ibb.co/LxrhK51/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100%',
        height: '300px',
    };


    return (
        <div>
            {/* <h2 className="text-5xl">Your Bookings: {bookings?.length}</h2> */}

            {/* bookings banner */}
            <div style={bookingsBanner} className="relative my-5" >
                <div className="absolute flex justify-center items-center md:justify-start md:px-10 lg:px-20 gap-5 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00) 100%) h-full w-full xl:rounded-xl">
                    <div>
                    <h2 className="text-center font-bold text-2xl md:text-4xl lg:text-5xl text-white">My Order</h2>
                    </div>
                </div>
            </div>

            {/* bookings info */}
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th>
                        <label>
                            {/* <input type="checkbox" className="checkbox" /> */}
                        </label>
                        </th>
                        <th>Food Image</th>
                        <th>Food name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Rating</th>
                        <th>Order date</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    {
                        bookings?.map((booking, index) => <BookingRow 
                        key={index} 
                        booking={booking}
                        // handleDelete={handleDelete}
                        // handleBookingConfirm={handleBookingConfirm}
                        ></BookingRow>)
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
    };

export default Bookings;
