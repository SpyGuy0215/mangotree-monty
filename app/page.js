'use client';

import Link from "next/link";
import Image from "next/image";
import {Divide as Hamburger} from "hamburger-react";
import {useState} from "react";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";

export default function Home() {

    const [isFlyoutOpen, setFlyoutOpen] = useState(false);

    return (
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
                <img className={'object-cover h-svh mx-auto'} src={'/open-7-days-large-resized.png'}
                     alt={'The Mango Tree - Open Now, 7 Days A Week'}/>
            </div>
            <Footer/>
        </div>
    )
}