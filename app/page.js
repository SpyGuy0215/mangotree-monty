'use client';

import Link from "next/link";
import Image from "next/image";
import {Divide as Hamburger} from "hamburger-react";
import {useEffect, useState} from "react";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import app from "@/firebaseConfig";
import {getAnalytics, logEvent, isSupported} from "firebase/analytics";
import Header from "@/app/components/Header";

export default function Home() {

    const [isFlyoutOpen, setFlyoutOpen] = useState(false);
    const [hasSentPageView, setHasSentPageView] = useState(false);

    useEffect(() => {
        try {
            handlePageView();
        }
        catch (e) {
            console.error(e); // ensure analytics breaking does not break the site
        }
    }, []);

    function handlePageView() {
        const isDev = process.env.NODE_ENV === 'development';
        if (!hasSentPageView) {
            isSupported().then((supported) => {
                if (supported) {
                    const analytics = getAnalytics(app);
                    if(!isDev) {
                        logEvent(analytics, 'page_view', {
                            page_title: 'Home',
                        });
                    }
                    else{
                        logEvent(analytics, 'dev_page_view', {
                            page_title: 'Home',
                        })
                    }
                }
            })
            setHasSentPageView(true);
        }
    }

    return (
        <div className={'h-screen dark:[color-scheme:dark]'}>
            <Banner/>
            <Header currentPage={'home'}/>
            <div id={'section-1'} className={'h-fit bg-black overflow-hidden'}>
                <img className={'object-contain scale-[3] h-screen sm:scale-100 mx-auto'} src={'/open-7-days-large-resized.png'}
                     alt={'The Mango Tree - Open Now, 7 Days A Week'}/>
            </div>
            <Footer/>
        </div>
    )
}