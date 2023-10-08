import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SpeakerCard = () => {
    const speakerDeatils = useLoaderData();
    const { id } = useParams();
    const data = speakerDeatils.speakers;
    const finalData = data.find((speaker) => speaker.id === parseInt(id));
    const { profile_picture, name, title, age, company, description } = finalData;
    return (
        <div className='p-10 text-white'>
            <div className="items-center text-center grid  justify-center">
                <img className='rounded-full' src={profile_picture} alt="Shoes" />
                <h2 className='text-2xl font-mono mt-10'>{name}</h2>
            </div>
            <div className="text-white font-normal gap-5">
                <p className='mb-3'>Age: {age}</p>
                <p className='mb-3'>{company}</p>
                <p className='mb-3'>{title}</p>
                <p className='mb-3'>{description}</p>
            </div>
        </div>
    );
};

export default SpeakerCard;