import React, { useState } from 'react';

const AccordionItem = ({ header, text }) => {
    const [active, setActive] = useState(false);

    const handleToggle = () => {
        event.preventDefault();
        setActive(!active);
    };
    return (
        <div className="single-faq mb-8 w-full rounded-lg border border-[#535cb9] bg-white p-4 sm:p-8 lg:px-6 xl:px-8">
            <button
                className={`faq-btn flex w-full text-left`}
                onClick={() => handleToggle()}
            >
                <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary bg-opacity-5 text-primary">
                    <svg
                        className={`duration-200 ease-in-out fill-primary stroke-primary ${active ? "rotate-180" : ""
                            }`}
                        width="17"
                        height="10"
                        viewBox="0 0 17 10"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
                            fill=""
                            stroke=""
                        />
                    </svg>
                </div>

                <div className="w-full">
                    <h4 className="text-lg font-semibold text-black">{header}</h4>
                </div>
            </button>

            <div
                className={`pl-[62px] duration-200 ease-in-out ${active ? "block" : "hidden"
                    }`}
            >
                <p className="py-3 text-base leading-relaxed text-body-color">{text}</p>
            </div>
        </div>
    );
};

const FaqSection = () => {
    return (
        <section className="relative z-20 overflow-hidden bg-base-200 pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto">
                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="mb-2 block text-lg font-semibold text-primary">
                                FAQ
                            </span>
                            <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="What services do you offer for corporate events?"
                            text="We offer a wide range of services for corporate events, including event planning, venue selection, catering, audiovisual services, entertainment booking, and more. Our goal is to provide a one-stop solution for all your corporate event needs."
                        />
                        <AccordionItem
                            header="How much does event management services cost?"
                            text="The cost of our services can vary depending on the size and complexity of your event, as well as the specific services you require. We offer customized pricing packages to suit your budget and needs. Contact us for a personalized quote."
                        />
                        <AccordionItem
                            header="Can you help with both small and large corporate events?"
                            text="Yes, we have experience managing events of all sizes, from intimate team meetings to large-scale conferences and conventions. Our team is equipped to handle events of any scale."
                        />
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        <AccordionItem
                            header="How far in advance should I book your services for my event?"
                            text="It's recommended to contact us as early as possible, especially for larger events. This allows us to secure the best venues and suppliers and ensure that all the necessary preparations are made well in advance."
                        />
                        <AccordionItem
                            header="Do you have preferred vendors or can I choose my own suppliers?"
                            text="We have a network of trusted vendors and suppliers, but we are also open to working with your preferred choices if you have specific preferences. We'll work closely with you to ensure your event meets your vision."
                        />
                        <AccordionItem
                            header="Can you help with virtual or hybrid corporate events?"
                            text="Yes, we are experienced in planning and managing virtual and hybrid events. We can assist with technical setup, live streaming, and all the elements necessary to make your virtual or hybrid event a success."
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 right-0 z-[-1]">
                <svg
                    width="1440"
                    height="886"
                    viewBox="0 0 1440 886"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                        fill="url(#paint0_linear)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear"
                            x1="1308.65"
                            y1="1142.58"
                            x2="602.827"
                            y2="-418.681"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stopColor="#3056D3" stopOpacity="0.36" />
                            <stop offset="1" stopColor="#F5F2FD" stopOpacity="0" />
                            <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default FaqSection;