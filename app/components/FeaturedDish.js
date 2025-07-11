import Image from 'next/image';
import Link from "next/link";

export default function FeaturedDish({title = 'Featured Dish', imageSrc = '/coming-soon.png', orderLink = 'https://www.clover.com/online-ordering/mango-tree-indian-cuisin-belle-mead'}) {
    return (
        <div className={'border border-zinc-400 bg-zinc-100 w-[90%] md:w-[27%] h-[90%] mb-6 md:mb-0 rounded-3xl flex flex-col justify-between'}>
            <div className={'h-[70%] relative'}>
                <Image src={imageSrc} fill className={'object-cover rounded-t-3xl'} alt={'Featured Dish'}/>
            </div>
            <h1 className={'font-inter font-semibold text-black text-3xl md:text-4xl text-center'}>{title}</h1>
            <Link href={orderLink}
                  className={'bg-orange-500 hover:bg-orange-600 w-full rounded-b-3xl transition-all duration-300'}>
                <h1 className={'font-inter text-white text-2xl md:text-3xl font-semibold text-center py-3'}>Order</h1>
            </Link>
        </div>
    )
}