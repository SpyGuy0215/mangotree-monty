'use client';

import Link from "next/link";
import Image from "next/image";
import {Divide as Hamburger} from "hamburger-react";
import {useState} from "react";

export default function Home() {

    const [isFlyoutOpen, setFlyoutOpen] = useState(false);

    return (
        <div className={'h-dvh dark:[color-scheme:dark]'}>
            <div id={'menu-container'} className={'absolute z-20 w-full h-full flex flex-col'}>
                <div id={'top-menu'} className={'w-full h-24 absolute z-20 flex flex-row backdrop-blur-md bg-opacity-50 bg-gray-900'}>
                    <div id={'logo-container'} className={'relative aspect-square sm:ml-6'}>
                        <Image src={'/logo.png'} alt={'Logo'} fill/>
                    </div>
                    <div id={'big-menu'}
                         className={'invisible w-0 h-0 absolute text-center sm:relative sm:visible sm:w-fit ml-auto flex flex-row sm:h-full text-xl justify-between px-8'}>
                        <Link href={'/'} className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-orange-400'}>Home</h2>
                        </Link>
                        <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                              className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Our Menu</h2>
                        </Link>
                        <Link href={'/contact'}
                              className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Contact Us</h2>
                        </Link>
                        {/*<Link href={'/'} className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>*/}
                        {/*    <h2 className={'text-slate-400 hover:text-orange-400'}>About Us</h2>*/}
                        {/*</Link>*/}

                        {/*<Link href={'/'} className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>*/}
                        {/*    <h2 className={'text-slate-400 hover:text-orange-400'}>Services</h2>*/}
                        {/*</Link>*/}
                        {/*<Link href={'/'} className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>*/}
                        {/*    <h2 className={'text-slate-400 hover:text-orange-400'}>Gallery</h2>*/}
                        {/*</Link>*/}
                        <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                              className={'h-fit w-fit my-auto px-3 absolute sm:relative bg-orange-400 ml-1 hover:scale-110 transition ease-in-out'}>
                            <h2 className={'text-slate-50 hover:text-white py-4'}>Order Now</h2>
                        </Link>
                    </div>
                    <div className={'scale-125 w-fit h-fit z-40 md:scale-0 md:w-0 md:-z-20 self-center absolute right-7'}>
                        <Hamburger toggled={isFlyoutOpen} toggle={setFlyoutOpen} size={48} color={'#FFFFFF'}/>
                    </div>
                </div>
                <div id={'flyout'}
                     className={'h-full z-20 mt-24 backdrop-blur-md bg-opacity-50 bg-gray-900 relative'}
                     hidden={!isFlyoutOpen}>
                    <div id={'flyout-link-manager'} className={'h-80 text-4xl mx-auto flex flex-col items-center'}>
                        <Link href={'/'} className={'h-fit w-fit my-auto px-3'}>
                            <h2 className={'text-orange-400'}>Home</h2>
                        </Link>
                        <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                              className={'h-fit w-fit my-auto px-3 '}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Our Menu</h2>
                        </Link>
                        <Link href={'/contact'}
                              className={'h-fit w-fit my-auto px-3'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Contact Us</h2>
                        </Link>
                        <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                              className={'bh-fit w-fit my-auto px-3  bg-orange-400 ml-1 hover:scale-110 transition ease-in-out'}>
                            <h2 className={'text-slate-50 hover:text-white py-4'}>Order Now</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div id={'section-1'} className={'h-fit bg-black'}>
                <img className={'object-cover h-svh mx-auto'} src={'/opening-9-22-large-resized.png'}
                     alt={'The Mango Tree - Opening 9/22'}/>
            </div>
            <div id={'footer'} className={'flex flex-col mb-20 md:pb-0 pt-8 md:pt-0 md:flex-row h-60 bg-black items-center'}>
                <div id={'box-1 contact-footer'} className={'flex flex-col text-white w-full md:w-5/12 text-center'}>
                    <h2 className={'text-3xl py-2'}>Contact Us</h2>
                    <div id={'contact-footer-phone'} className={'flex flex-row w-fit self-center justify-between py-2'}>
                        <Image src={'/phone-icon.png'} alt={'Phone Icon'} width={24} height={24} className={'invert aspect-square mr-2'}/>
                        <h2 className={'text-md md:text-xl'}>(908)-829-3169</h2>
                    </div>
                    <div id={'contact-footer-phone'} className={'flex flex-row w-fit self-center justify-between py-2'}>
                        <Image src={'/location-pin-icon.png'} alt={'Location Icon'} width={24} height={0} className={'invert aspect-square mr-2'}/>
                        <h2 className={'text-md md:text-xl'}>2311 Route 206, Suite 102, Belle Mead NJ</h2>
                    </div>
                    <div id={'contact-footer-socials'} className={'flex flex-row w-fit self-center justify-between py-2'}>
                        <Link href={'https://www.facebook.com/share/f3s93fH55GRMavx1/?mibextid=LQQJ4d'}>
                            <Image src={'/facebook-icon.png'} alt={'Facebook Icon'} width={40} height={40} className={'aspect-square mr-2'}/>
                        </Link>
                        <Link href={'https://www.instagram.com/themangotreemonty?igsh=dHpiMHF3MXBwYnRz'}>
                            <Image src={'/instagram-icon.png'} alt={'Instagram Icon'} width={42} height={42} className={'aspect-square mr-2'}/>
                        </Link>
                    </div>
                </div>
                <div id={'box-2 image-footer'} className={'flex w-full md:w-2/12 relative justify-center items-center'}>
                    <Image src={'/logo.png'} alt={'Logo'} height={200} width={200} className={''}/>
                </div>
                <div id={'box-3 hours-footer'} className={'flex flex-col w-full md:w-5/12 text-center px-2 pb-12 md:pb-0'}>
                    <h2 className={'text-3xl py-2'}>Hours of Operation</h2>
                    {/*<h3 className={'text-md md:text-xl pt-2 pb-1'}>Wednesday - Monday</h3>*/}
                    <h3 className={'text-md md:text-xl pt-2 pb-1'}>Monday - Sunday</h3> {/* Special timing - Tuesday open*/}
                    <h3 className={'text-sm md:text-md py-1'}>11:30AM - 2:30PM</h3>
                    <h3 className={'text-sm md:text-md py-1'}>5:30PM - 9:30PM</h3>
                    {/*<h3 className={'text-md md:text-xl py-2'}>Tuesday: Closed</h3>*/} {/* Special timing - Tuesday open*/}
                </div>
            </div>
        </div>
    )
}