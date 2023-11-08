import PropTypes from "prop-types";
// import toast from "react-hot-toast";

const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {

    const {_id, name, rating, date, category, image, price, status} = booking || {};


    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle bg-black hover:bg-[#FF3811]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 font-bold text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="avatar">
                    <div className="mask rounded-lg w-24 h-20">
                        {
                            image && <img
                            src={image}
                            alt="Avatar Tailwind CSS Component"
                            />
                        }
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>
                {category}
            </td>
            <td>
                {price}
            </td>
            <td>{rating}</td>
            <td>{date}</td>
            <th>
            {
                status === 'confirm' ? 
                <button className="btn text-white py-1 bg-[#5dff33] capitalize hover:bg-black hover:text-white rounded-full">Confirmed</button>
                : 
                <button className="btn text-white py-1 bg-[#5dff33] capitalize hover:bg-black hover:text-white rounded-full">Please Confirm</button>
            }
            </th>
        </tr>
    );
};

BookingRow.propTypes = {
    booking: PropTypes.any,
    handleDelete: PropTypes.any,
    handleBookingConfirm: PropTypes.any
};

export default BookingRow;