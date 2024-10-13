export default function Banner() {
    /*
    * This component is a banner that appears at the top of the page (above header).
    * It is used to display important information to the user.
     */
    let isBannerVisible = true; // Turn false when not needed

    if(isBannerVisible){
        return (
            <div id={'banner'} className={'w-full h-12 bg-black text-white flex flex-row justify-center items-center'}>
                <h2 className={'text-center text-md md:text-2xl text-orange-300'}>All tables booked from 12:15pm - 2pm. Expect a wait time of at least 1 hour.</h2>
            </div>
        )
    }
    else{
        return null;
    }
}