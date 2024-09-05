import React from 'react';
import { TbBrandFacebook } from 'react-icons/tb';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitterX } from 'react-icons/bs';
import { PiLinkedinLogoBold } from 'react-icons/pi';
import logo from '../../public/Logo.png';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='max-w-7xl mx-auto px-4 py-8 md:py-12'>
                <div className='border-b-2 border-gray-500 pb-8 md:pb-12'>
                    <div className='flex flex-col md:flex-row md:gap-16'>
                        <div className='flex flex-col items-center md:items-start md:w-1/3 mb-8 md:mb-0'>
                            <img src={logo} alt="Logo" className='mb-4' />
                        </div>
                        <div className='flex flex-col md:w-1/3 mb-8 md:mb-0'>
                            <p className='font-bold text-lg mb-3'>About Us</p>
                            <ul className='text-gray-500'>
                                <li>Master Plan</li>
                                <li>Jobs</li>
                                <li>Invest</li>
                                <li>Pressroom</li>
                                <li>Blog</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                        <div className='flex flex-col md:w-1/3 mb-8 md:mb-0'>
                            <p className='font-bold text-lg mb-3'>Explore EEVE</p>
                            <ul className='text-gray-500'>
                                <li>Unlock my Robot Power</li>
                                <li>Starlight</li>
                                <li>Robot Platform</li>
                                <li>EEVE Roadmap</li>
                            </ul>
                        </div>
                        <div className='flex flex-col md:w-1/3'>
                            <p className='font-bold text-lg mb-3'>Community & Support</p>
                            <ul className='text-gray-500'>
                                <li>Willow X Community</li>
                                <li>Developer & Maker Access</li>
                                <li>Special Cases</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='py-6 flex flex-col md:flex-row justify-between items-center'>
                    <div className='text-white flex gap-4 mb-4 md:mb-0'>
                        <TbBrandFacebook className='text-2xl'/>
                        <GrInstagram className='text-2xl'/>
                        <BsTwitterX className='text-2xl'/>
                        <PiLinkedinLogoBold className='text-2xl'/>
                    </div>
                    <div className='text-gray-500 mb-4 md:mb-0'>
                        <ul className='flex flex-col md:flex-row gap-4 md:gap-8'>
                            <li>March22 Recap</li>
                            <li>Privacy Policy</li>
                            <li>General Terms</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-2'>
                        <img className='w-8' src="./United_States.png" alt="Country Flag" />
                        <p className='text-gray-500'>United States (English)</p>
                    </div>
                </div>

                <div className='text-center'>
                    <p className='text-gray-500 text-base'>EEVE © 2024. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;