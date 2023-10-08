import React, { useState, useEffect } from 'react';
import SpeakerCard from './SpeakerCard';
import { Link } from 'react-router-dom';

const Speakers = () => {
    const [speakers, setSpeakers] = useState([]);

    useEffect(() => {
        fetch('./speakers.json')
            .then(res => res.json())
            .then(data => setSpeakers(data));
    }, []);

    const data = speakers.speakers;

    return (
        <div className="lg:p-10 p-4 mx-auto w-full max-w-screen-xl">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-white">Our Speakers</h1>
                <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            </div>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 p-3 md:gap-4'>
                {
                    data?.map((speaker) => {
                        const id = speaker.id;
                        {
                            return (
                                <Link key={id} to={`/speaker/${id}`} className='grid gap-10 mx-auto w-full max-w-screen-xl lg:tooltip' data-tip={speaker.description}>
                                    <div className="">
                                        <div className="card card-side bg-base-100 shadow-xl items-center">
                                            <figure><p className='text-7xl items-center text-white'><img src={speaker.profile_picture} alt="" /></p></figure>
                                            <div className="card-body">
                                                <h2 className="text-start font-bold text-white text-2xl">{speaker.name}</h2>
                                                <p className='text-start text-white'>{speaker.title}</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        }
                    })
                }
            </div>
        </div >
    );
};

export default Speakers;