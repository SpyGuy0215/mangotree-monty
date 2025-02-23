"use client";

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import {useEffect, useState} from "react";
import {getFirestore, doc, collection, onSnapshot, getDoc} from "firebase/firestore";
import app from "@/firebaseConfig";
import Image from "next/image";

export default function WeekendSpecial(){
    const [imgURL, setImgURL] = useState('');

    const db = getFirestore(app);

    useEffect(() => {
        // collection is "website", doc is "weekend-special", field is "img-url"
        const imgUrlRef = doc(collection(db, 'website'), 'weekend_special');
        const fetchData = async() => {
            return await getWithDocRef(imgUrlRef);
        }
        let imgUrlSnap;
        fetchData().then((snap) => {
            imgUrlSnap = snap;
            console.log('imgUrlSnap:', imgUrlSnap.data());
            setImgURL(imgUrlSnap.data().img_url);
            console.log(imgUrlSnap.data().img_url);
        });
    }, []);

    async function getWithDocRef(docRef){
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log('Document data:', docSnap.data());
        } else {
            console.log('No such document!');
        }
        return docSnap;
    }


    return(
        <div className={'bg-black'}>
            <Header currentPage={'weekend-special'}/>
            {
                imgURL === '' ? <h1 className={'text-white pt-36 mx-auto w-full'}>Loading...</h1>
                    :
                    <Image src={imgURL} alt={"Weekend Special"} width={0} height={0} sizes={"100vw"}
                    className={"w-11/12 md:w-8/12 h-auto pt-36 mx-auto"} priority/>

            }
            <Footer/>
        </div>
    )
}