import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';


const ServiceDetails = () => {
    const fullData = useLoaderData();
    const { id } = useParams();
    const newData = fullData.eventServices.find(data => data.id === parseInt(id));
    const { name, image, price, description } = newData;
    return (
        <div className='lg:p-10 p-4 mx-auto w-full max-w-screen-xl'>
            <div className="text-white">
                <div className="relative">
                    <img className='w-full lg:h-[700px] rounded-xl' src={image} alt="" />
                    <div className="w-full absolute bottom-0 rounded-b bg-black opacity-80 flex items-center">
                        <h2 ></h2>
                        <h2 className=' m-4 text-white ml-10 text-4xl'>{price}</h2>
                    </div>
                </div>
                <div className="mt-5">
                    <h1 className="text-3xl mb-5 font-bold text-black">{name}</h1>
                    {/* <p className="">{date}</p> */}
                    {/* <p className="">{location}</p> */}
                    <p className="">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;