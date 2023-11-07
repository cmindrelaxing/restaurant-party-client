

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../index.css';
import Swal from 'sweetalert2';

const FoodItem = ({food, foods, setFoods}) => {

    const { _id, name, image, description, price, category} = food || {};

    const confirmDelete = _id => {
        console.log(`Confirm Delete ${_id}`);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be delete this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#5dff33",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            // delete by _id
            fetch(`http://localhost:5000/foods/${_id}`, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.deletedCount > 0) {
                    Swal.fire({
                    title: "Deleted!",
                    text: "Your Food has been deleted successfully.",
                    icon: "success"
                    });
                    const remaining = foods?.filter(foo => foo._id !== _id);
                    setFoods(remaining);
                }
            })
            }
        });
    };

    return (
        <div>
            <div className='box_hover bg-[#222831] text-white rounded-lg md:rounded-xl rounded-bl-lg rounded-br-lg '>
                <div className='img_box bg-[#F1F2F3] py-10 rounded-tl-lg rounded-tr-lg rounded-bl-3xl w-full'>
                    <img className='mx-auto w-[150px] h-[150px]' src={image} alt="" />
                </div>
                <div className='space-y-4 p-5'>
                    <h2>{name}</h2>
                    <div className='min-h-[100px]'>
                    {
                        description.length > 150 
                        ?
                        <p className=""><small>{description.slice(0, 160)}.
                        <Link  
                        className="text-[#5dff33] font-bold"> Read More...
                        </Link> </small></p>
                        :
                        <p><small>{description}</small></p>
                    }
                    </div>
                    <div className='flex justify-between items-center'>
                        <p className='font-semibold flex items-center gap-1'>$ {price}</p>
                        <p className='text-[#5dff33]'>{category}</p>
                    </div>
                    <div className='flex justify-between items-center pb-5'>
                    <Link to={`/updateFood/${_id}`}>
                        <button className="bg-[#5dff33] text-white py-2 md:py-1 font-semibold hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">Update</button>
                    </Link>
                    <div>
                        <button onClick={() => confirmDelete(_id)} className="bg-[#5dff33] text-white py-2 md:py-1 font-semibold hover:bg-orange-400 hover:text-white px-6 md:px-8 rounded-full">Delete</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

FoodItem.propTypes = {
    food: PropTypes.object,
    foods: PropTypes.array,
    setFoods: PropTypes.func
};

export default FoodItem;