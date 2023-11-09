

import { useEffect, useState } from "react";
import BookingRow from "../components/BookingRow";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router";
import axios from "axios";
import { Helmet } from "react-helmet";


const Bookings = () => {

    const loadBookings = useLoaderData();
    // console.log(loadBookings);
    const [bookings, setBookings] = useState(loadBookings);
    
    // const {user} = useAuth();
    // const [bookings, setBookings] = useState();

    // const url = `https://restaurant-management-server-g3evb8yb5.vercel.app/bookings`;

    useEffect(() => {
        axios.get('https://restaurant-management-server-g3evb8yb5.vercel.app/bookings', {withCredentials: true})
        .then(res => {
            setBookings(res.data);
        })
    }, []);

    const bookingsBanner = {
        backgroundImage: 'url(https://i.ibb.co/LxrhK51/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '100%',
        height: '300px',
    };


    const handleDelete = id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
    

            fetch(`https://restaurant-management-server-g3evb8yb5.vercel.app/bookings/${id}`, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if(data.deletedCount > 0) {
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                    });
                    const remaining = bookings?.filter(booking => booking._id !== id);
                    setBookings(remaining);
                }
            })
            }
        });
    };


    return (
        <div>
            {/* <h2 className="text-5xl">Your Bookings: {bookings?.length}</h2> */}

            <Helmet>
                <title>My Order - Food</title>
            </Helmet>

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
                        handleDelete={handleDelete}
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
