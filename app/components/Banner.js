export default function Banner() {
    /*
    * This component is a banner that appears at the top of the page (above header).
    * It is used to display important information to the user.
     */
    let isBannerVisible = false ; // Turn false when not needed

    if (isBannerVisible) {
        return (<div id={'banner'} className={'w-full h-12 bg-black text-white flex flex-row justify-center items-center'}>
                <h2 className={'text-center text-md md:text-3xl text-orange-300 underline underline-offset-2'}>
                    Happy New Year! Today, we are open until 11:30PM. BYOB.
                </h2>
            </div>)
    } else {
        return null;
    }
}