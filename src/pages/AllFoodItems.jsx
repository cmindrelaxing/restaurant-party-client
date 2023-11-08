
import { useLoaderData } from 'react-router-dom';
import '../index.css';
import FoodItem from '../components/FoodItem';
import { useEffect, useState } from 'react';

const AllFoodItems = () => {

    const loadedFoods = useLoaderData();
    // console.log(foods);

    const [foods, setFoods] = useState(loadedFoods);
    const [foodsCount, setFoodsCount] = useState();
    const {count} = foodsCount || {};
    console.log(count);

    const itemsPerPage = 9;
    const numberOfPages = Math.ceil(count / itemsPerPage);
    console.log(numberOfPages);

    // can i load more pages by for looping or Array
    const pages = [];
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i);
    }
    
    // Array of pages
    // const pages = [...Array(numberOfPages).keys()];
    // console.log(pages);


    // pagination for foods count
    useEffect(() => {
        fetch(`http://localhost:5000/foodsCount`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setFoodsCount(data);
        })
    }, []);
    

    // async function with pagination
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:5000/foods");
    //             if (response.ok) {
    //                 const data = await response.json();
    //                 console.log(data);
    //                 setFoodsCount(data);
    //             } else {
    //                 console.error("Failed to fetch data");
    //             }
    //         } catch (error) {
    //             console.error("An error occurred: ", error);
    //         }
    //     };
    
    //     fetchData();
    // }, []);


    return (
        <div className='pb-20 pt-10'>
            <div className="area mx-auto">
                <h1 className='text-center font-bold text-5xl dancing text-[#5dff33] mb-5'>Search Foods...</h1>
                <div className='flex justify-center items-center w-1/2 mx-auto mb-14'>
                    <input className=' flex-1 py-2 px-4 border-r-0 rounded-tl-full rounded-bl-full border-2 focus:outline-none focus:border-[2px] focus:border-[#5dff33] focus:text-[#5dff33]' type="search" name="" id="" />
                    <i className=' bg-[#5dff33] text-white py-2 px-5 rounded-tr-full rounded-br-full text-lg bx bx-search-alt-2'></i>
                </div>
                <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 area mx-auto md:px-5 lg:px-0'>
                    {
                        foods?.map(food => <FoodItem key={food._id} food={food} foods={foods} setFoods={setFoods}></FoodItem>)
                    }
                </div>
                <div className='text-center mt-10 pagination'>
                    {
                        // pages?.map((page, index) => <button className='btn rounded-sm ml-1 mr-1 ' key={index}>{page}</button>)
                        pages?.map((page, index) => <button className='text-base text-white bg-[#5dff33] hover:bg-orange-500 w-10 h-10 ml-1 mr-1 rounded-sm' key={index}>{page}</button>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllFoodItems;