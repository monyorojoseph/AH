import Link from "next/link"
import { useEffect, useState } from "react";
import { SlimApartment } from "../../shared/types"
import { useFetchApartment } from "../../hooks/swr/property"


export default function ApartmentListing({queryParams}: {queryParams: string}){
    const { next, results, previous, isLoading, error } = useFetchApartment(queryParams)

    useEffect(()=>{
    }, [queryParams])

    if (error) return <p>Error</p>
    if (isLoading) return <p>Loading</p>

    return (
        <>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">        

            {
                results?.map((listing:SlimApartment)=> (<List listing={listing} key={listing.id} />))
            }
        </div>
        </>
    )
}


function List({listing}:{listing: SlimApartment}){
    return(<>
            <Link href="/located/westlands">
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
                    <p className="font-bold text-opacity-80">{listing.name}</p>
                    <p className="text-sm text-opacity-70">{listing.estate}</p>
                    <p className="font-bold">ksh {listing.price}</p>
                </div>
                </div>
            </Link>          
    </>)
}

