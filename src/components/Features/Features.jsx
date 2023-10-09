import React from 'react';
import { BiSolidMicrophoneAlt } from "react-icons/bi";
import { IoTicketSharp } from "react-icons/io5";
import { MdAppRegistration } from "react-icons/md";

const Features = () => {
    return (
        <div className="">
            <div className="text-center m-4">
                <h2 className='text-4xl text-white'>Our Feature</h2>
            </div>
            <div className='grid md:grid-cols-2 p-3 md:gap-4 gap-10 mx-auto w-full max-w-screen-xl'>
                <div className="">
                    <div className="card card-side bg-base-100 shadow-xl items-center">
                        <figure><p className='text-7xl items-center text-white'><BiSolidMicrophoneAlt></BiSolidMicrophoneAlt></p></figure>
                        <div className="card-body">
                            <h2 className="text-start font-bold text-white text-2xl">SPEAKERS</h2>
                            <p className='text-start text-white'>12 Professional Speakers</p>
                        </div>
                    </div>
                </div>

                <div className="">
                    <div className="card card-side bg-base-100 shadow-xl items-center">
                        <figure><p className='text-7xl items-center text-white'><IoTicketSharp></IoTicketSharp></p></figure>
                        <div className="card-body">
                            <h2 className="text-start font-bold text-white text-2xl">TICKETS</h2>
                            <p className='text-start text-white'>12000 Tickets Remaining</p>
                        </div>
                    </div>
                </div>
                <div className="card card-side bg-base-100 shadow-xl items-center">
                    <figure><p className='text-7xl items-center text-white'><MdAppRegistration></MdAppRegistration></p></figure>
                    <div className="card-body">
                        <h2 className="text-start font-bold text-white text-2xl">REGISTRATION</h2>
                        <p className='text-start text-white'>4 Days Remaining</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;