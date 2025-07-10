'use client';

import {useEffect, useState} from "react";
import Footer from "@/app/components/Footer";
import Banner from "@/app/components/Banner";
import app from "@/firebaseConfig";
import {getAnalytics, isSupported, logEvent} from "firebase/analytics";
import Header from "@/app/components/Header";
import Link from "next/link";
import FeaturedDish from "@/app/components/FeaturedDish";

export default function Home() {

    const [hasSentPageView, setHasSentPageView] = useState(false);

    useEffect(() => {
        try {
            handlePageView();
        } catch (e) {
            console.error(e); // ensure analytics breaking does not break the site
        }
    }, []);

    function handlePageView() {
        const isDev = process.env.NODE_ENV === 'development';
        if (!hasSentPageView) {
            isSupported().then((supported) => {
                if (supported) {
                    const analytics = getAnalytics(app);
                    if (!isDev) {
                        logEvent(analytics, 'page_view', {
                            page_title: 'Home',
                        });
                    } else {
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
        <div className={'h-screen pointer-events-auto select-text'}>
            <Banner/>
            <Header currentPage={'home'}/>
            <div id={'section-1'} className={'h-[80vh] sm:h-[95vh] bg-white overflow-hidden'}>
                <div id={'video-container'} className={'h-[80vh] sm:h-[95vh]'}>
                    <video src={'/videos/main-background.mp4'} autoPlay loop muted className={'w-full h-full object-cover'}/>
                </div>
                <div id={'video-overlay'}
                     className={'absolute inset-0 flex h-[80vh] sm:h-[95vh] bg-black bg-opacity-40 justify-center items-center'}>
                    <div className={'flex flex-col items-center bg-opacity-95 bg-blur-lg p-4 rounded-3xl'}>
                        <h1 className={'text-[3rem] sm:text-8xl font-inter text-white font-bold text-center mb-10'}>Authentic Indian
                            Cuisine</h1>
                        <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                              className={'bg-orange-500 hover:bg-orange-600 hover:scale-105 transition-all duration-300 p-2 sm:p-5 rounded-3xl text-center w-full max-w-xs'}>
                            <h1 className={'text-3xl sm:text-4xl font-semibold'}>Order Now</h1>
                        </Link>
                    </div>
                </div>
            </div>
            <div id={'section-2'} className={'h-[180vh] sm:h-[75vh] bg-zinc-200 flex flex-col'}>
                <h1 className={'text-black font-inter font-semibold text-4xl sm:text-6xl mx-auto mt-16 text-center'}>Featured Dishes</h1>
                <div className={'flex flex-col sm:flex-row w-full h-full justify-around items-center mt-8 sm:mt-4'}>
                    <FeaturedDish title={'Butter Chicken'} imageSrc={'/images/butter-chicken.jpeg'}
                                  orderLink={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead/GX4X6CVSXTKMT'}/>
                    <FeaturedDish title={'Garlic Naan'} imageSrc={'/images/garlic-naan.jpeg'}
                                  orderLink={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead/WKB5V46K6QWQT'}/>
                    <FeaturedDish title={'Dosa'} imageSrc={'/images/benne-dosa.jpeg'}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}