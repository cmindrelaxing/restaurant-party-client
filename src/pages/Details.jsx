
import '../index.css';
import { useLoaderData } from "react-router-dom";

const Details = () => {

    const foods = useLoaderData();
    console.log(foods);

    return (
        <div>
            <div className='area mx-auto'>
            Hi
            </div>
        </div>
    );
};

export default Details;