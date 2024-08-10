import Link from "next/link";

export default function Home() {
    return (
        <div className={'h-dvh w-dvh'}>
            <div id={'menu'} className={'absolute z-10 bg-opacity-50 backdrop-blur-md w-full h-24 flex flex-row bg-gray-900'}>
                <div id={'big-menu'} className={'invisible sm:visible w-1/3 ml-auto flex flex-row h-full text-xl justify-between px-8'}>
                    <Link href={'/'} className={'h-fit w-fit my-auto'}>
                        <h2 className={'text-orange-400'}>Home</h2>
                    </Link>
                    <Link href={'/'} className={'h-fit w-fit my-auto'}>
                        <h2 className={'text-slate-400 hover:text-orange-400'}>About Us</h2>
                    </Link>
                </div>
                <div id={'small-menu'} className={'visible sm:invisible sm:w-0 sm:h-0 border border-blue-400 w-1/4'}>

                </div>
            </div>
            <div id={'section-1'} className={'h-full bg-black overflow-visible'}>
                <img className={'object-cover h-full mx-auto'} src={'/coming-soon-large.png'}  alt={'The Mango Tree - Coming Soon'} />
            </div>
            {/*<div id={'footer'} className={'flex flex-row h-40 bg-gray-900'}>*/}
            {/*    <div id={'box-1'} className={'text-white w-1/3 p-4 text-center border border-amber-500'}>*/}
            {/*        <h2 className={'text-2xl'}>Contact Info</h2>*/}
            {/*        <h3 className={'text-xl mt-4'}>contactus@mangotreemonty.com</h3>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
    )
}