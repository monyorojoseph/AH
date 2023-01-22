import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import { useFetchRegions } from "../../hooks/swr/estate"
import { Item, Region } from "../../shared/types"
import { useFetchApartmentTypes, useFetchHouseTypes } from "../../hooks/swr/property"


export default function SubNav(){
    const { data: regions } = useFetchRegions();
    const { data: apartments } = useFetchApartmentTypes()
    const { data: houses } = useFetchHouseTypes()


    return (
        <>
        <ul className="list-none flex flex-row justify-center items-center space-x-4">
            <Menu as='li'
            className="relative cursor-pointer border-none">
                {({open})=>(
                    <>
                        <Menu.Button 
                        className='p-1 flex flex-row justify-center items-center space-x-1 border-none'>
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
                                className="absolute">
                                    <div className="relative top-4 bg-white flex flex-col justify-center items-start space-y-3 py-3
                                    border rounded-md w-60">
                                        {
                                            apartments?.types?.map((apt: Item)=>(
                                                <Menu.Item key={apt.value}>
                                                    <Link href={`/apartment/${apt.value}`}>
                                                        <span className="py-1 px-6">{apt.label}</span>
                                                    </Link>
                                                </Menu.Item>
                                            ))
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>
                    </>
                )}
            </Menu>

            <Menu as='li'
            className="relative cursor-pointer border-none">
                {({open})=>(
                    <>
                        <Menu.Button 
                        className='p-1 flex flex-row justify-center items-center space-x-1 border-none'>
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
                                className="absolute ">
                                    <div
                                    className="relative top-4 bg-white flex flex-col justify-center items-start space-y-3 py-3
                                    border rounded-md w-60">
                                        {
                                            houses?.types?.map((hse:Item)=>(
                                                <Menu.Item key={hse.value}>
                                                    <Link href={`/house/${hse.value}`}>
                                                        <span className="py-1 px-6">{hse.label}</span>
                                                    </Link>
                                                </Menu.Item>
                                            ))
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>
                    </>
                )}
            </Menu>

            <Menu as='li'
            className="relative cursor-pointer border-none">
                {({open})=>(
                    <>
                        <Menu.Button 
                        className='p-1 flex flex-row justify-center items-center space-x-1 border-none'>
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
                                className="absolute">
                                    <div
                                    className="relative top-4 bg-white flex flex-col justify-center items-start space-y-3 py-3
                                    border rounded-md">
                                        {
                                            regions?.map((region:Region)=>(
                                                <Menu.Item key={region.region}>
                                                    <Link href={`/region/${region.region}`}>
                                                        <span className="py-1 px-6">{region.region}</span>
                                                    </Link>
                                                </Menu.Item>
                                            ))
                                        }
                                    </div>
                                </Menu.Items>
                            </Transition>
                    </>
                )}
            </Menu>
            
        </ul>
        </>
    )
}