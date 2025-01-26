'use client';
import Image from "next/image";
import Link from "next/link";
import {Divide as Hamburger} from "hamburger-react";
import {useState} from "react";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import Header from "@/app/components/Header";

export default function Contact() {

    const [isFlyoutOpen, setFlyoutOpen] = useState(false);

    return(
        <div className={'h-fit dark:[color-scheme:dark] dark bg-gray-950'}>
            <Banner/>
            <Header currentPage={'contact'} />
            <div id={'section-1'} className={'w-full h-fit py-32 text-center'}>
                <h2 className={'text-6xl text-slate-50'}>Contact Us</h2>
            </div>
            <div id={'section-2'} className={'flex flex-col md:flex-row mx-5 md:mx-20 mb-20 justify-between text-center text-slate-50 h-fit'}>
                <div id={'phone-box'} className={'md:w-5/12 flex flex-col bg-zinc-900 pb-20 px-10 rounded-3xl border-2 border-zinc-200 mt-10'}>
                    <Image src={'/phone-icon.png'} alt={'Phone Icon'} width={32} height={32} className={'invert mx-auto my-10'}/>
                    <h2 className={'text-3xl py-2'}>Phone Numbers</h2>
                    <h2 className={'text-md md:text-3xl mt-10'}>(908)-829-3169</h2>
                    <h2 className={'text-md md:text-3xl mt-10'}>(908)-935-2559</h2>
                </div>
                <div id={'address-box'} className={'md:w-5/12 flex flex-col bg-zinc-900 pb-20 px-10 rounded-3xl border-2 border-zinc-200 mt-10'}>
                    <Image src={'/location-pin-icon.png'} alt={'Location Pin Icon'} width={32} height={32} className={'invert mx-auto my-10'}/>
                    <h2 className={'text-3xl py-2'}>Location</h2>
                    <h2 className={'text-md md:text-4xl mt-10'}>2311 Route 206, Suite 102, Belle Mead NJ</h2>
                </div>
                {/*<div id={'hours-box'} className={'flex flex-col bg-zinc-900 pb-20 pl-10 pr-10 rounded-3xl border-2 border-zinc-200 mt-10'}>*/}
                {/*    <Image src={'/clock-icon.png'} alt={'Clock Icon'} width={32} height={32} className={'invert mx-auto my-10'}/>*/}
                {/*    <h2 className={'text-3xl py-2'}>Hours of Operation</h2>*/}
                {/*    /!*<h3 className={'text-md md:text-xl pt-2 pb-1'}>Wednesday - Monday</h3>*!/*/}
                {/*    <h3 className={'text-md md:text-xl pt-2 pb-1'}>Monday - Sunday</h3> /!* Special timing - Tuesday open*!/*/}
                {/*    <h3 className={'text-sm md:text-md py-1'}>11:30AM - 2:30PM</h3>*/}
                {/*    <h3 className={'text-sm md:text-md py-1'}>5:00PM - 9:30PM</h3>*/}
                {/*    /!*<h3 className={'text-md md:text-xl py-2'}>Tuesday: Closed</h3>*!/ /!* Special timing - Tuesday open*!/*/}
                {/*</div>*/}
            </div>
            <Footer/>
        </div>
    )
}