import Link from "next/link"
import { useEffect } from "react";
import { SlimHouse } from "../../shared/types"
import { useFetchHouses } from "../../hooks/swr/property"
import Loading from "../States/loading";
import Error from "../States/error";


export default function HouseListing({queryParams}: {queryParams: string}){
    const { next, results, previous, isLoading, error } = useFetchHouses(queryParams)

    useEffect(()=>{
    }, [queryParams])


    if (error) return <Error />
    if (isLoading) return <Loading />

    return (
        <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3"> 
                {
                    results?.map((listing:SlimHouse)=> (<List listing={listing} key={listing.id} />))
                }
            </div>           
            <div className="flex flex-row justify-center">
                {next && (<button className="rounded-sm text-lg text-opacity-50 border px-6 py-2 my-10 hover:shadow-md">
                    Load more apartments
                </button>)}
            </div>
        </>
    )
}


function List({listing}:{listing: SlimHouse}){
    return(<>
            <Link href={`/house/details/${listing.id}`}>
                <div className="group rounded-md shadow-sm hover:border-black border">
                <div className="max-h-40 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-md 
                bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img
                    src={`http://127.0.0.1:8000${listing.cover_image}`}
                    alt='studio'
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                </div>
                <div className="mt-1 p-2">
                    <p className="font-bold text-opacity-80">{listing.village}</p>
                    <p className="text-sm text-opacity-70">{listing.estate}</p>
                    <p className="font-bold">ksh {listing.price}</p>
                </div>
                </div>
            </Link>          
    </>)
}

