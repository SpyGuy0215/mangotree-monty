import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div id={'footer'} className={'flex flex-col md:pb-0 pt-8 md:pt-0 md:flex-row h-60 bg-black items-center'}>
            <div id={'box-1 contact-footer'} className={'flex flex-col text-white w-full md:w-5/12 text-center'}>
                <h2 className={'text-3xl py-2'}>Contact Us</h2>
                <div id={'contact-footer-phone'} className={'flex flex-row w-fit self-center justify-between py-2'}>
                    <Image src={'/phone-icon.png'} alt={'Phone Icon'} width={24} height={24} className={'invert aspect-square mr-2'}/>
                    <h2 className={'text-md md:text-xl'}>(908)-829-3169 / (908)-935-2559</h2>
                </div>
                <div id={'contact-footer-phone'} className={'flex flex-row w-fit self-center justify-between py-2'}>
                    <Image src={'/location-pin-icon.png'} alt={'Location Icon'} width={24} height={0}
                           className={'invert aspect-square mr-2'}/>
                    <h2 className={'text-md md:text-xl'}>2311 Route 206, Suite 102, Belle Mead NJ</h2>
                </div>
                <div id={'contact-footer-socials'} className={'flex flex-row w-fit self-center justify-between py-2'}>
                    <Link href={'https://www.facebook.com/share/f3s93fH55GRMavx1/?mibextid=LQQJ4d'}>
                        <Image src={'/facebook-icon.png'} alt={'Facebook Icon'} width={40} height={40} className={'aspect-square mr-2'}/>
                    </Link>
                    <Link href={'https://www.instagram.com/themangotreemonty?igsh=dHpiMHF3MXBwYnRz'}>
                        <Image src={'/instagram-icon.png'} alt={'Instagram Icon'} width={42} height={42} className={'aspect-square mr-2'}/>
                    </Link>
                </div>
            </div>
            <div id={'box-2 image-footer'} className={'flex w-full md:w-2/12 relative justify-center items-center'}>
                <Image src={'/logo.png'} alt={'Logo'} height={200} width={200} className={''}/>
            </div>
            <div id={'box-3 hours-footer'} className={'flex flex-col w-full md:w-5/12 text-center px-2 pb-12 md:pb-0'}>
                <h2 className={'text-3xl py-2'}>Hours of Operation</h2>
                {/*<h3 className={'text-md md:text-xl pt-2 pb-1'}>Wednesday - Monday</h3>*/}
                <h3 className={'text-md md:text-xl pt-2 pb-1'}>Monday - Sunday</h3> {/* Special timing - Tuesday open*/}
                <h3 className={'text-sm md:text-md py-1'}>11:30AM - 2:30PM</h3>
                <h3 className={'text-sm md:text-md py-1'}>5:00PM - 9:30PM</h3>
                {/*<h3 className={'text-md md:text-xl py-2'}>Tuesday: Closed</h3>*/} {/* Special timing - Tuesday open*/}
            </div>
        </div>
    )
}