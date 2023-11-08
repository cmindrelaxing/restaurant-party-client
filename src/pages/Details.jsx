
import { useEffect, useState } from 'react';
import '../index.css';
import { useLoaderData, useParams } from "react-router-dom";
import Detail from '../components/Detail';
import { Helmet } from 'react-helmet';

const Details = () => {

    const [details, setDetails] = useState();

    const {id} = useParams();

    const foods = useLoaderData();
    // console.log(foods);

    useEffect(() => {
        const detailsInfo = foods?.find(food => food._id === id);
        setDetails(detailsInfo);
    }, [foods, id]);

    return (
        <div>
            <Helmet>
                <title>Food - Details</title>
            </Helmet>
            <div className='area mx-auto'>
            <Detail details={details}></Detail>
            </div>
        </div>
    );
};

export default Details;