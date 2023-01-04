import Image from "next/image"
import Link from "next/link"
import apt_1 from '../../public/images/apt_1.jpg'

export default function Listing(){
    return(<>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">          
            <Link href="/located/westlands">
                <div className="group rounded-md shadow-sm hover:border-black border">
                <div className="max-h-40 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-md 
                bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <Image
                    src={apt_1}
                    alt='studio'
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-1 p-2">
                    <p>Spearnet apartments</p>
                    <p>Limuru Road</p>
                    <p>ksh18 000</p>
                </div>
                </div>
            </Link>              
        </div>
            
    </>)
}

