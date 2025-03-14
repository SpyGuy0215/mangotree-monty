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

    useEffect(() => {
        const weekendSpecialEnabledRef = doc(collection(db, 'website'), 'weekend_special');
        const fetchData = async () => {
            return await getWithDocRef(weekendSpecialEnabledRef);
        }
        let weekendSpecialEnabledSnap;
        fetchData().then((snap) => {
            weekendSpecialEnabledSnap = snap;
            setWeekendSpecialEnabled(weekendSpecialEnabledSnap.data().enabled);
            console.log(weekendSpecialEnabledSnap.data().enabled);
        });
    }, [])

    async function getWithDocRef(docRef){
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
        } else {
            console.log('No such document!');
        }
        return docSnap;
    }

    const [isFlyoutOpen, setFlyoutOpen] = useState(false);
    return (<div id={'menu-container'} className={'absolute z-20 w-full h-full flex flex-col'}>
            <div id={'top-menu'} className={'w-full h-24 absolute z-20 flex flex-row backdrop-blur-md bg-opacity-50 bg-gray-900'}>
                <div id={'logo-container'} className={'relative aspect-square sm:ml-6'}>
                    <Image src={'/logo.png'} alt={'Logo'} fill/>
                </div>
                <div id={'big-menu'}
                     className={'invisible w-0 h-0 absolute text-center sm:relative sm:visible sm:w-fit ml-auto flex flex-row sm:h-full text-xl justify-between px-8'}>
                    <Link href={'/weekend-special'} hidden={!weekendSpecialEnabled}
                          className={'bh-fit w-fit my-auto px-3 mr-16 bg-orange-400 mx-auto hover:scale-110 transition ease-in-out' +
                              'shadow-orange-400 shadow-lg'}>
                        <h2 className={'text-slate-50 hover:text-white py-4 text-xl'}>Weekend Special</h2>
                    </Link>
                    {isHome ?
                        <Link href={'/'} className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-orange-400'}>Home</h2>
                        </Link> :
                        <Link href={'/'} className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Home</h2>
                        </Link>
                    }
                    <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                          className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                        <h2 className={'text-slate-400 hover:text-orange-400'}>Our Menu</h2>
                    </Link>
                    {isContact ?
                        <Link href={'/contact'}
                                       className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-orange-400'}>Contact Us</h2>
                        </Link> :
                        <Link href={'/contact'}
                                    className={'h-fit w-fit my-auto px-3 absolute sm:relative'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Contact Us</h2>
                        </Link>
                    }

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
                <div id={'flyout-link-manager'} className={'h-5/6 text-4xl mx-auto flex flex-col items-center'}>
                    <Link href={'/weekend-special'} hidden={!weekendSpecialEnabled}
                          className={'bh-fit w-fit my-auto px-3  bg-orange-400 ml-1 hover:scale-110 transition ease-in-out text-2xl'}>
                        <h2 className={'text-slate-50 py-4'}>Weekend Special</h2>
                    </Link>
                    {isHome ?
                        <Link href={'/'} className={'h-fit w-fit my-auto px-3'}>
                            <h2 className={'text-orange-400'}>Home</h2>
                        </Link> :
                        <Link href={'/'} className={'h-fit w-fit my-auto px-3'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Home</h2>
                        </Link>}
                    <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                          className={'h-fit w-fit my-auto px-3 '}>
                        <h2 className={'text-slate-400 hover:text-orange-400'}>Our Menu</h2>
                    </Link>
                    {isContact ?
                        <Link href={'/contact'}
                              className={'h-fit w-fit my-auto px-3'}>
                            <h2 className={'text-orange-400'}>Contact Us</h2>
                        </Link> :
                        <Link href={'/contact'}
                              className={'h-fit w-fit my-auto px-3'}>
                            <h2 className={'text-slate-400 hover:text-orange-400'}>Contact Us</h2>
                        </Link>}
                    <Link href={'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}
                          className={'bh-fit w-fit my-auto px-3  bg-orange-400 ml-1 hover:scale-110 transition ease-in-out'}>
                        <h2 className={'text-slate-50 hover:text-white py-4'}>Order Now</h2>
                    </Link>
                </div>
            </div>
        </div>)
}