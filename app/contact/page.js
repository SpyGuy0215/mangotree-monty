'use client';
import Image from "next/image";
import Link from "next/link";
import {Divide as Hamburger} from "hamburger-react";
import {useState} from "react";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";

export default function Contact() {

    const [isFlyoutOpen, setFlyoutOpen] = useState(false);

    return(
        <div className={'h-dvh dark:[color-scheme:dark]'}>
            <Banner/>
            <div id={'menu-container'} className={'absolute z-20 w-full h-full flex flex-col'}>
                <div id={'top-menu'} className={'w-full h-24 absolute z-20 flex flex-row backdrop-blur-md bg-opacity-50 bg-gray-900'}>
                    <div id={'logo-container'} className={'relative aspect-square sm:ml-6'}>
                        <Image src={'/logo.png'} alt={'Logo'} fill/>
                    </div>
                    <div id={'big-menu'}
                         className={'invisible w-0 h-0 absolute text-center sm:relative sm:visible sm:w-fit ml-auto flex flex-row sm:h-full text-xl justify-between px-8'}>
                        <Link href={'/'} className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Home</h2>
                        </Link>
                        <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                              className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Our Menu</h2>
                        </Link>
                        <Link href={'/contact'}
                              className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-orange-400'}>Contact Us</h2>
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
                    <div className={'scale-125 w-fit h-fit z-40 md:scale-0 md:w-0 md:-z-10 self-center absolute right-7'}>
                        <Hamburger toggled={isFlyoutOpen} toggle={setFlyoutOpen} size={48} color={'#FFFFFF'}/>
                    </div>
                </div>
                <div id={'flyout'}
                     className={'h-full z-20 md:-z-20 mt-24 backdrop-blur-md bg-opacity-50 bg-gray-900 relative'}
                     hidden={!isFlyoutOpen}>
                    <div id={'flyout-link-manager'} className={'h-80 text-4xl mx-auto flex flex-col items-center'}>
                        <Link href={'/'} className={'h-fit w-fit my-auto px-3'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Home</h2>
                        </Link>
                        <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                              className={'h-fit w-fit my-auto px-3 '}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Our Menu</h2>
                        </Link>
                        <Link href={'/contact'}
                              className={'h-fit w-fit my-auto px-3'}>
                            <h2 className={'text-orange-400'}>Contact Us</h2>
                        </Link>
                        <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                              className={'bh-fit w-fit my-auto px-3  bg-orange-400 ml-1 hover:scale-110 transition ease-in-out'}>
                            <h2 className={'text-slate-50 hover:text-white py-4'}>Order Now</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div id={'section-1'} className={'w-full h-fit py-32 text-center'}>
                <h2 className={'text-5xl'}>Contact Us</h2>
            </div>
            <div id={'section-2'} className={'flex flex-col md:flex-row mx-20 mb-20 justify-between text-center'}>
                <div id={'phone-box'} className={'flex flex-col bg-zinc-900 pb-20 pl-10 pr-10 rounded-3xl border-2 border-zinc-200 mt-10'}>
                    <Image src={'/phone-icon.png'} alt={'Phone Icon'} width={32} height={32} className={'invert mx-auto my-10'}/>
                    <h2 className={'text-3xl py-2'}>Phone Number</h2>
                    <h2 className={'text-md md:text-4xl mt-10'}>(908)-829-3169</h2>
                </div>
                <div id={'address-box'} className={'flex flex-col bg-zinc-900 pb-20 pl-10 pr-10 rounded-3xl border-2 border-zinc-200 mt-10'}>
                    <Image src={'/location-pin-icon.png'} alt={'Location Pin Icon'} width={32} height={32} className={'invert mx-auto my-10'}/>
                    <h2 className={'text-3xl py-2'}>Location</h2>
                    <h2 className={'text-md md:text-4xl mt-10'}>2311 Route 206, Suite 102, Belle Mead NJ</h2>
                </div>
                <div id={'hours-box'} className={'flex flex-col bg-zinc-900 pb-20 pl-10 pr-10 rounded-3xl border-2 border-zinc-200 mt-10'}>
                    <Image src={'/clock-icon.png'} alt={'Clock Icon'} width={32} height={32} className={'invert mx-auto my-10'}/>
                    <h2 className={'text-3xl py-2'}>Hours of Operation</h2>
                    {/*<h3 className={'text-md md:text-xl pt-2 pb-1'}>Wednesday - Monday</h3>*/}
                    <h3 className={'text-md md:text-xl pt-2 pb-1'}>Monday - Sunday</h3> {/* Special timing - Tuesday open*/}
                    <h3 className={'text-sm md:text-md py-1'}>11:30AM - 2:30PM</h3>
                    <h3 className={'text-sm md:text-md py-1'}>5:30PM - 9:30PM</h3>
                    {/*<h3 className={'text-md md:text-xl py-2'}>Tuesday: Closed</h3>*/} {/* Special timing - Tuesday open*/}
                </div>
            </div>
            <Footer/>
        </div>
    )
}