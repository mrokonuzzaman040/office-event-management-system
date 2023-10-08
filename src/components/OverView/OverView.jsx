import React from 'react';

const OverView = () => {
    return (
        <div className='lg:p-10 p-4 mx-auto w-full max-w-screen-xl' >
            <div className="text-center m-2 mb-6">
                <h2 className='text-4xl text-white'>EVENT OVERVIEW</h2>
                <p className='text-4xl text-white'>.....</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center justify-center">
                <div className="">
                    <h4 className='text-2xl text-white mb-2'>ENVATO ANNUAL COFFERENCE</h4>
                    <p className='text-white font-normal'>Evening creeping open saying unto. Seed she'd bring saw gathered fill. Evening a face Fill deep isn't brought beginning given was. Great without one above fifth she'd so were let blessed whose he day him.

                        Forth shall female dominion, thing seas male great. Given great, a have over firmament that first open seas after living green upon his. Under blessed all our first all every face third their waters had void can't morning which. From

                    </p>
                    <button className='btn btn-primary m-2'>Speakers</button>
                </div>

                <div className="video">
                    <iframe className='w-full h-96' src="https://www.youtube.com/embed/6okddtpBcTE" title="Programming Hero 2.0" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                </div>
            </div>
        </div>
    );
};

export default OverView;