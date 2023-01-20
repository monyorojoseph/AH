import { useEffect, useState } from "react";
import Layout from "../../Layout/layout";
import HouseListing from "../house_listing";
import HouseMapListing from "../house_map_listing";
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Regions, Apartments, Houses } from "../../Navbar/subnav"
// import Link from "next/link"
import { SlimApartment } from "../../../shared/types";
import TabFilter from "../../Filters/tab_filter";
import { UI_TYPES } from "../../../shared/constants";




const PRICING = [
    {label: "Cheap to expensive"},
    {label: "Expensive to cheap"}

]

type props  = {
    extra: String,
    location: boolean,
    listings: Array<SlimApartment> | null
}

export default function ListHouses({extra, listings}:props){
    const [ tab, setTab ] = useState<string>(UI_TYPES[0])
    // useEffect(()=>{
    //     console.log(listings)
    // }, [listings])
    return (
        <Layout>
            <section className="container mx-auto">
                <div className="lg:w-10/12 lg:mx-auto my-5 space-y-4">
                    <h6 className="text-center text-lg font-bold">{extra}</h6>
                    <TabFilter tab={tab} setTab={setTab} tabs={UI_TYPES} />

                    <div>
                        <div className="space-y-4">
                             <Filter />

                            { tab === UI_TYPES[0] && <HouseListing listings={listings} />}
                            { tab === UI_TYPES[1] && <HouseMapListing listings={listings}/>}
                        
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

function Filter(){
    return (
        <div className="flex flex-row justify-start items-center space-x-3">
            <Menu as='div'
            className="relative cursor-pointer">
                {({open})=>(
                    <>
                        <Menu.Button 
                        className='p-1 flex flex-row justify-center items-center space-x-1 border rounded-md px-3 py-1 hover:border-black'>
                            <span>Pricing</span>
                            <span><ChevronDownIcon className={` h-5 w-5 ${open && "rotate-180 transform"}`} /></span>
                        </Menu.Button>
                        
                            <Transition
                                show={open}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Menu.Items static as='section' 
                                className="absolute top-2 left-5 bg-white flex flex-col justify-center items-start space-y-3 py-3
                                border w-60 rounded-md">
                                    {
                                        PRICING.map((price)=>(
                                            <Menu.Item key={price.label}>
                                                    <span className="py-1 px-6">{price.label}</span>
                                            </Menu.Item>
                                        ))
                                    }
                                </Menu.Items>
                            </Transition>
                    </>
                )}
            </Menu> 

            <Menu as='div'
                className="relative cursor-pointer border-none">
                    {({open})=>(
                        <>
                            <Menu.Button 
                            className='p-1 flex flex-row justify-center items-center space-x-1 border rounded-md px-3 py-1 hover:border-black'>
                                <span>Regions</span>
                                <span><ChevronDownIcon className={` h-5 w-5 ${open && "rotate-180 transform"}`} /></span>
                            </Menu.Button>
                            
                                <Transition
                                    show={open}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Menu.Items static as='section' 
                                    className="absolute top-4 bg-white flex flex-col justify-center items-start space-y-3 py-3
                                    border rounded-md">
                                        {
                                            Regions.map((location)=>(
                                                <Menu.Item key={location.label}>
                                                        <span className="py-1 px-6">{location.label}</span>
                                                </Menu.Item>
                                            ))
                                        }
                                    </Menu.Items>
                                </Transition>
                        </>
                    )}
            </Menu>

        </div>
    )
}