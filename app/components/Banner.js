'use client';

import {useEffect, useState} from "react";
import {collection, doc, getDoc, getFirestore} from "firebase/firestore";
import app from "@/firebaseConfig";

export default function Banner() {
    /*
    * This component is a banner that appears at the top of the page (above header).
    * It is used to display important information to the user.
     */
    const [isEnabled, setIsEnabled] = useState(false); // false when off, true when on
    const [bannerMessage, setBannerMessage] = useState(''); // message to display in the banner
    const db = getFirestore(app);

    useEffect(() => {
        const bannerEnabledRef = doc(collection(db, 'website'), 'banner');
        const fetchData = async () => {
            return await getWithDocRef(bannerEnabledRef);
        }
        let bannerEnabledSnap;
        fetchData().then((snap) => {
            bannerEnabledSnap = snap;
            console.log('bannerEnabledSnap:', bannerEnabledSnap.data());
            setIsEnabled(bannerEnabledSnap.data().enabled);
            setBannerMessage(bannerEnabledSnap.data().message);
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

    if (isEnabled) {
        return (<div id={'banner'} className={'w-full h-12 bg-black text-white flex flex-row justify-center items-center'}>
                <h2 className={'text-center text-md md:text-3xl text-orange-300 underline underline-offset-2'}>
                    {bannerMessage}
                </h2>
            </div>)
    } else {
        return null;
    }
}