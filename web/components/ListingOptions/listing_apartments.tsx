import { useState } from "react";
import Layout from "../../components/Layout/layout";
import Listing from "./listing";
import ListingMap from "./listing_map";
import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Locations, Apartments, Houses } from "../Navbar/subnav"
import Link from "next/link"

const OPTIONS = {
    List: "List", 
    Map: "Map", 

}

const PRICING = [
    {label: "Cheap to expensive"},
    {label: "Expensive to cheap"}

]

type props  = {
    extra: String,
    location: boolean
}

export default function ListApartments({extra, location}:props){
    const [ tab, setTab ] = useState<String>(OPTIONS.List)
    return (
        <Layout>
            <section className="container mx-auto">
                <div className="lg:w-10/12 lg:mx-auto my-5 space-y-4">
                    <h6 className="text-center text-lg font-bold">{extra}</h6>
                    <div className="flex flex-row justify-start items-center space-x-2">
                        <span
                        className={`rounded-md cursor-pointer border font-bold text-sm py-1 px-3 ${tab === OPTIONS.List && 'bg-black text-white'}`}
                        onClick={()=>setTab(OPTIONS.List)}>List</span>
                        <span
                        className={`rounded-md cursor-pointer border font-bold text-sm py-1 px-3 ${tab === OPTIONS.Map && 'bg-black text-white'}`}
                        onClick={()=>setTab(OPTIONS.Map)}>Map</span>
                    </div>
                    <div>
                        <div className="space-y-4">
                            {location ? <LocationFilter /> : <HouseApartmentFilter />}

                            { tab === OPTIONS.List && <Listing />}
                            { tab === OPTIONS.Map && <ListingMap />}
                        
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

function LocationFilter(){
    return(
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
                            <span>Apartments</span>
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
                                border rounded-md w-60">
                                    {
                                        Apartments.map((apt)=>(
                                            <Menu.Item key={apt.label}>
                                                    <span className="py-1 px-6">{apt.label}</span>
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
                            <span>Houses</span>
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
                                border rounded-md w-60">
                                    {
                                        Houses.map((hse)=>(
                                            <Menu.Item key={hse.label}>
                                                    <span className="py-1 px-6">{hse.label}</span>
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

function HouseApartmentFilter(){
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
                                <span>Location</span>
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
                                            Locations.map((location)=>(
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