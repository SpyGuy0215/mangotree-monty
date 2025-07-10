'use client';

import Image from "next/image";
import Link from "next/link";
import {Divide as Hamburger} from "hamburger-react";
import {useEffect, useState} from "react";
import {collection, doc, getDoc, getFirestore} from "firebase/firestore";

import app from "@/firebaseConfig";

export default function Header({currentPage}) {
    const isHome = currentPage === 'home';
    const isWeekendSpecial = currentPage === 'weekend-special';
    const isContact = currentPage === 'contact';

    const db = getFirestore(app);
    const [weekendSpecialEnabled, setWeekendSpecialEnabled] = useState(false);
    const [weekendSpecialLabel, setWeekendSpecialLabel] = useState('Weekend Special');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const weekendSpecialRef = doc(collection(db, 'website'), 'weekend_special');
        const fetchData = async () => {
            return await getWithDocRef(weekendSpecialRef);
        }
        let weekendSpecialSnap;
        fetchData().then((snap) => {
            weekendSpecialSnap = snap;
            setWeekendSpecialEnabled(weekendSpecialSnap.data().enabled);
            setWeekendSpecialLabel(weekendSpecialSnap.data().label);
            console.log(weekendSpecialSnap.data().enabled);
            console.log(weekendSpecialSnap.data().label);
        });

        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
            if(window.scrollY > 10){
                console.log('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); // cleanup event listener
        }

    }, [])

    async function getWithDocRef(docRef) {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
        } else {
            console.log('No such document!');
        }
        return docSnap;
    }

    const [isFlyoutOpen, setFlyoutOpen] = useState(false);
    return (<div id={'menu-container'} className={'fixed top-0 z-20 w-screen h-fit flex flex-col pointer-events-auto'}>
        <div id={'top-menu'} className={'w-full h-24 absolute z-20 flex flex-row backdrop-blur-md bg-zinc-900' +
            ' ' + (scrolled ? 'bg-opacity-95' : 'bg-opacity-50') + ' transition-all duration-500 ease-in-out'}>
            <div id={'logo-container'} className={'relative aspect-square sm:ml-6'}>
                <Image src={'/logo.png'} alt={'Logo'} fill/>
            </div>
            <div className={'h-full justify-center flex'}>
                <h1 className={'text-xl sm:text-4xl mx-auto text-zinc-100 font-bold ml-2 sm:ml-4 my-auto'}>The Mango Tree</h1>
            </div>
            <div id={'big-menu'}
                 className={'invisible w-0 h-0 absolute text-center sm:relative sm:visible sm:w-fit ml-auto flex flex-row sm:h-full text-xl justify-between px-8'}>
                <Link href={'/weekend-special'} hidden={!weekendSpecialEnabled}
                      className={'bh-fit w-fit my-auto px-3 mr-4 bg-orange-500 mx-auto hover:scale-110 transition ease-in-out' +
                          'shadow-orange-500 shadow-lg'}>
                    <h2 className={'text-slate-50 hover:text-white py-4 text-xl'}>{weekendSpecialLabel}</h2>
                </Link>
                <Link href={'/'} className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                    <h2 className={`${isHome ? 'text-orange-500' : 'text-slate-400 hover:text-orange-500'}`}>Home</h2>
                </Link>
                <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                      className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                    <h2 className={'text-slate-400 hover:text-orange-500'}>Our Menu</h2>
                </Link>
                {isContact ?
                    <Link href={'/contact'}
                          className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                        <h2 className={'text-orange-500'}>Contact Us</h2>
                    </Link> :
                    <Link href={'/contact'}
                          className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                        <h2 className={'text-slate-400 hover:text-orange-500'}>Contact Us</h2>
                    </Link>
                }
                <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                      className={'h-fit w-fit my-auto px-3 absolute sm:relative bg-orange-500 ml-1 hover:scale-110 transition ease-in-out'}>
                    <h2 className={'text-slate-50 hover:text-white py-4'}>Order Now</h2>
                </Link>
            </div>
            <div className={'scale-125 w-fit h-fit z-40 md:scale-0 md:w-0 md:-z-20 self-center absolute right-7'}>
                <Hamburger toggled={isFlyoutOpen} toggle={setFlyoutOpen} size={48} color={'#FFFFFF'}/>
            </div>
        </div>
        <div id={'flyout'}
             className={'h-[90vh] z-20 mt-24 backdrop-blur-md bg-opacity-50 bg-gray-900 relative'}
             hidden={!isFlyoutOpen}>
            <div id={'flyout-link-manager'} className={'h-5/6 text-4xl mx-auto flex flex-col items-center'}>
                <Link href={'/weekend-special'} hidden={!weekendSpecialEnabled}
                      className={'h-fit w-fit my-auto px-3 bg-orange-500 ml-1 hover:scale-110 transition ease-in-out text-2xl'}>
                    <h2 className={'text-slate-50 py-4'}>Weekend Special</h2>
                </Link>
                {isHome ?
                    <Link href={'/'} className={'h-fit w-fit my-auto px-3'}>
                        <h2 className={'text-orange-500'}>Home</h2>
                    </Link> :
                    <Link href={'/'} className={'h-fit w-fit my-auto px-3'}>
                        <h2 className={'text-slate-400 hover:text-orange-500'}>Home</h2>
                    </Link>}
                <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                      className={'h-fit w-fit my-auto px-3 '}>
                    <h2 className={'text-slate-400 hover:text-orange-500'}>Our Menu</h2>
                </Link>
                {isContact ?
                    <Link href={'/contact'}
                          className={'h-fit w-fit my-auto px-3'}>
                        <h2 className={'text-orange-500'}>Contact Us</h2>
                    </Link> :
                    <Link href={'/contact'}
                          className={'h-fit w-fit my-auto px-3'}>
                        <h2 className={'text-slate-400 hover:text-orange-500'}>Contact Us</h2>
                    </Link>}
                <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                      className={'bh-fit w-fit my-auto px-3  bg-orange-500 ml-1 hover:scale-110 transition ease-in-out'}>
                    <h2 className={'text-slate-50 hover:text-white py-4'}>Order Now</h2>
                </Link>
            </div>
        </div>
    </div>)
}