import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Services = () => {
    const data = useLoaderData();
    const newData = data.eventServices;

    return (
        <div>
            <div className='mt-5 lg:p-10 p-4 mx-auto w-full max-w-screen-xl'>
                <div className="mb-10">
                    <h1 className='text-3xl font-bold text-center'>Our Services</h1>
                    <p className='text-center text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        newData.map(data => {
                            return (
                                <div className='' key={data.id}>
                                    <div data-aos="zoom-in" className="card w-96 bg-base-100 shadow-xl text-white">
                                        <figure><img className='w-full' src={data.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{data.name}</h2>
                                            <div className=" card-actions justify-between items-center">
                                                <p>{data.price}</p>
                                                <p>{data.description}</p>
                                            </div>
                                            <div className="card-actions justify-end">
                                                <Link to={`/service/${data.id}`} className="btn btn-primary">Details</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;