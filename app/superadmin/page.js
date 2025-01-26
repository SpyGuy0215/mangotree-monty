'use client';

import React from 'react';
import {useState} from "react";
import {Switch} from "@heroui/switch";
import {Input} from "@heroui/input";
import {Image} from "@heroui/image";
import {Chip} from "@heroui/chip";
import './styles.css';


export default function SuperAdmin(){

    // Weekend Special
    const [weekendSpecialEnabled, setWeekendSpecialEnabled] = useState(false);
    const [weekendSpecialButtonText, setWeekendSpecialButtonText] = useState('');
    const [weekendSpecialImageURL, setWeekendSpecialImageURL] = useState('');
    const [isWeekendSpecialImageURLValid, setIsWeekendSpecialImageURLValid] = useState(false);

    return(
        <div className={'bg-gray-100 pt-5 h-dvh'}>
            <h1 className={'ml-10 text-4xl font-bold'}>Admin Home</h1>
            <div id={'bannerChange'} className={'border-1 border-slate-300 bg-slate-50 rounded-xl h-fit mx-10 p-3 mt-20 w-1/3 flex-col'}>
                <h2 className={'text-2xl font-medium mb-1'}>Banner</h2>
                <hr/>
                <div className={'flex-row justify-between my-2'}>
                    {/*<h3>Visible</h3>*/}
                    <Switch size={'md'} className={'my-4'}>Visible</Switch>
                    <Input label={"Text"} variant={'bordered'} className={'my-4'}/>
                </div>
            </div>
            <div id={'weekendSpecial'} className={'border-1 border-slate-300 bg-slate-50 rounded-xl h-fit mx-10 p-3 mt-20 w-1/3 flex-col'}>
                <h2 className={'text-2xl font-medium mb-1'}>Weekend Special</h2>
                <hr/>
                <div className={'flex-row justify-between my-2'}>
                    {/*<h3>Visible</h3>*/}
                    <Switch size={'md'} className={'my-4'}>Enabled</Switch>
                    <Input label={"Button Text"} variant={'bordered'} className={'my-4'} onValueChange={setWeekendSpecialImageURL}/>
                    <Input label={"Image URL"} variant={'bordered'} className={'my-4'}/>
                    {!isWeekendSpecialImageURLValid && <Chip>This is a placeholder image</Chip>}
                    <Image src={weekendSpecialImageURL} isBlurred
                           fallbackSrc={'https://www.whiskaffair.com/wp-content/uploads/2021/10/Andhra-Chicken-Curry-2-3.jpg'}
                           alt={'Weekend Special'} className={'w-1/3'} height={300} width={300}/>
                </div>
            </div>
        </div>
    )
}