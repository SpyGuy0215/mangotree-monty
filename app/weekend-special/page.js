import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

export default function WeekendSpecial(){
    return(
        <div className={'bg-black'}>
            <Header currentPage={'weekend-special'}/>
            <img src={'/weekend-special-winter.png'} alt={'Weekend Special'} className={'w-full md:w-5/12 mx-auto pt-36'}/>
            <Footer/>
        </div>
    )
}