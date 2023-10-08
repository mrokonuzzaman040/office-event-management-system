import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
const Events = () => {
    const enevtsData = useLoaderData();
    const data = enevtsData.events;
    const { type, name, date, location, img } = data;
    return (
        <div className='mt-5 lg:p-10 p-4 mx-auto w-full max-w-screen-xl'>
            <div className="grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    data.map(data => {
                        return (
                            <div className='' key={data.id}>
                                <div className="card w-96 bg-base-100 shadow-xl text-white">
                                    <figure><img className='w-full' src={data.img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{data.type}</h2>
                                        <div className=" card-actions justify-between items-center">
                                            <p>{data.date}</p>
                                            <p>{data.location}</p>
                                        </div>
                                        <div className="card-actions justify-end">
                                            <Link to={`/event/${data.id}`} className="btn btn-primary">Details</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Events;

{/* <h1>{data.type}</h1>
<h1>{data.name}</h1>
<h1>{data.date}</h1>
<h1>{data.location}</h1>
<img src={data.img} alt="" /> */}