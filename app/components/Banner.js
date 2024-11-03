import Link from "next/link";

export default function Banner() {
    /*
    * This component is a banner that appears at the top of the page (above header).
    * It is used to display important information to the user.
     */
    let isBannerVisible = false; // Turn false when not needed

    if (isBannerVisible) {
        return (<div id={'banner'} className={'w-full h-12 bg-black text-white flex flex-row justify-center items-center'}>

                <Link href={'/diwalibuffet'} className={''}>
                    <h2 className={'text-center text-md md:text-2xl text-orange-300 underline underline-offset-2 hover:text-orange-100'}>
                        Happy Diwali! Special Diwali Buffet on Saturday, Nov. 2nd
                    </h2>
                </Link>
            </div>)
    } else {
        return null;
    }
}