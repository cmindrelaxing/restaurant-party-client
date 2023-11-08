

// import '../index.css';

// const ChoiceFood = () => {
//     return (
//         <div>
//             <div className='area mx-auto'>

//             </div>
//         </div>
//     );
// };

// export default ChoiceFood;



// import { useLoaderData } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import FoodItem from '../components/FoodItem';
import { useEffect, useState } from 'react';
import '../index.css';

const AllFoodItems = () => {

    // const loadedFoods = useLoaderData();
    // console.log(foods);
    // const [foods, setFoods] = useState(loadedFoods);

    const [foods, setFoods] = useState();
    const [singlePage, setSinglePage] = useState(9);
    const [currentPage, setCurrentPage] = useState(0);
    const [foodsCount, setFoodsCount] = useState();
    const {count} = foodsCount || {};
    // console.log(count);

    // const singlePage = 9;
    const numberOfPages = Math.ceil(count / singlePage);
    // console.log(numberOfPages);

    // can i load more pages by for looping or Array
    const pages = [];
    for (let i = 0; i < numberOfPages; i++) {
        pages.push(i);
    }
    
    // Array of pages
    // const pages = [...Array(numberOfPages).keys()];
    // console.log(pages);


    useEffect(() => {
        fetch(`http://localhost:5000/foods?page=${currentPage}&size=${singlePage}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setFoods(data);
        })
    }, [currentPage, singlePage]);

    // pagination for foods count
    useEffect(() => {
        fetch(`http://localhost:5000/foodsCount`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setFoodsCount(data);
        })
    }, []);
    

    // onChange and see per page results
    const handlePerPage = (e) => {
        // console.log(e.target.value);
        const val = parseInt(e.target.value);
        setSinglePage(val);
        setCurrentPage(0);
    };

    // prev and next buttons
    const prevButton = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    const nextButton = () => {
        if(currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1);
        }
    };


    return (
        <div className=' pb-10 lg:pb-20 pt-10'>
            
            <Helmet>
                <title>All Food - Collection</title>
            </Helmet>

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
                    <button onClick={prevButton} className='w-20 h-10 mb-4 lg:mb-0 '>Prev</button>
                    {
                        pages?.map((page, index) => <button
                        className={currentPage === page ? 'selected w-10 h-10 mb-4 lg:mb-0 '  : 'w-10 h-10 mb-4 lg:mb-0 '}
                        onClick={ () => setCurrentPage(page) }
                        key={index}>{page + 1}
                        </button>)
                    }
                    <select className=' mb-4 lg:mb-0 ml-1 mr-1 text-white h-[39px] outline-none px-2' value={singlePage} onChange={handlePerPage} name="" id="">
                        <option value="9">9</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                    </select>
                    <button onClick={nextButton} className='w-20 h-10 mb-4 lg:mb-0'>Next</button>
                </div>
            </div>
        </div>
    );
};

export default AllFoodItems;