import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';




const Hero = () => {

    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');

    useEffect(() => {
        const countdownDate = new Date('October 22, 2023 11:59:00').getTime();

        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const seconds = Math.floor(distance % (1000 * 60) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
            } else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);

        return () => clearInterval(interval.current);
    }, []);

    return (
        <>
            <div className="hero mx-auto" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold  text-white">GET READY</h1>

                        <p className="mb-5 text-white text-center">Great together tree air, them the. Greater face let night created very place creature. Deep abundantly good winged called seas land itself the bring creature.</p>
                        <Link to={'/register'} className="btn btn-primary text-white">REGISTER NOW</Link>

                        <p className=' text-white text-3xl font-semibold'>Conference Starts In:</p>
                        <div className="border w-auto p-2 m-4 rounded-lg border-blue-500">
                            <div className="flex flex-row justify-center">
                                <div className="flex flex-col items-center justify-center m-2">
                                    <p className="text-white text-4xl">{days}</p>
                                    <p className="text-white">Days</p>
                                </div>
                                <p className='text-6xl text-white'>:</p>
                                <div className="flex flex-col items-center justify-center m-2">
                                    <p className="text-white text-4xl">{hours}</p>
                                    <p className="text-white">Hours</p>
                                </div>
                                <p className='text-6xl text-white'>:</p>
                                <div className="flex flex-col items-center justify-center m-2">
                                    <p className="text-white text-4xl">{minutes}</p>
                                    <p className="text-white">Minutes</p>
                                </div>
                                <p className='text-6xl text-white'>:</p>
                                <div className="flex flex-col items-center justify-center m-2">
                                    <p className="text-white text-4xl">{seconds}</p>
                                    <p className="text-white">seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;