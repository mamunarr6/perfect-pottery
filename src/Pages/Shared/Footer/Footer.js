import React from 'react';
import { IoLocationSharp, IoMailSharp, IoCall } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="common-bg" style={{ color: 'white' }}>
            <div className="container mx-auto">
                <div className="sm:grid grid-cols-12 py-7 ">
                    {/* footer contact us section */}
                    <div className="col-span-4 ml-2">
                        <h1 className="text-2xl font-bold py-3 ">Contact Us</h1>
                        <div>
                            <p className="flex items-center gap-2">
                                <IoLocationSharp className=" text-xl" /> <span className="text-lg my-1 font-normal">Street 5/7,Uttara ,Dahak</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <IoMailSharp className=" text-xl" /> <span className="text-lg my-1 font-normal">Perfect@pottery.com</span>
                            </p>
                            <p className="flex items-center gap-2">
                                <IoCall className=" text-xl" /> <span className="text-lg my-1 font-normal">+8801234567890</span>
                            </p>
                        </div>
                    </div>
                    {/* footer about us section */}
                    <div className="col-span-4 ml-2">
                        <h1 className="text-2xl font-bold py-3 ">About Us</h1>
                        <div>
                            <p className="flex items-center ">
                                <span className="text-lg my-1 font-normal">Success</span>
                            </p>
                            <p className="flex items-center ">
                                <span className="text-lg my-1 font-normal">Privacy Policy</span>
                            </p>
                            <p className="flex items-center ">
                                <span className="text-lg my-1 font-normal">Terms &amp; Conditions</span>
                            </p>
                        </div>
                    </div>
                    {/* footer help section */}
                    <div className="col-span-4 ml-2" >
                        <h1 className="text-2xl font-bold py-3 ">Help</h1>
                        <div>
                            <p className="flex items-center ">
                                <span className="text-lg my-1 font-normal">FAQ's</span>
                            </p>
                            <p className="flex items-center ">
                                <span className="text-lg my-1 font-normal">Pricing Plans</span>
                            </p>
                            <p className="flex items-center ">
                                <span className="text-lg my-1 font-normal">Return Policy</span>
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="text-center py-5 text-lg">Copyright &copy; 2021 Perfect@Pottery.com</h1>
            </div>
        </div>
    );
};

export default Footer;