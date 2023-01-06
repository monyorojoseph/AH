import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export const Locations = [
    {label: "Westlands"},
    {label: "Ruaka"},
    {label: "Ruiru"},
    {label: "Karen"},
    {label: "Kilimani"},

]

export const Apartments = [
    {label: "Studio"},
    {label: "One bedroom"},
    {label: "Two bedroom"},
    {label: "Three bedroom"},

]

export const Houses = [
    {label: "Two bedroom"},
    {label: "Three bedroom"},
    {label: "Four bedroom"},
    {label: "Five bedroom"},
]

export default function SubNav(){
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
                                className="absolute top-4 bg-white flex flex-col justify-center items-start space-y-3 py-3
                                border rounded-md w-60">
                                    {
                                        Apartments.map((apt)=>(
                                            <Menu.Item key={apt.label}>
                                                <Link href={`/apartment/${apt.label}`}>
                                                    <span className="py-1 px-6">{apt.label}</span>
                                                </Link>
                                            </Menu.Item>
                                        ))
                                    }
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
                                className="absolute top-4 bg-white flex flex-col justify-center items-start space-y-3 py-3
                                border rounded-md w-60">
                                    {
                                        Houses.map((hse)=>(
                                            <Menu.Item key={hse.label}>
                                                <Link href={`/house/${hse.label}`}>
                                                    <span className="py-1 px-6">{hse.label}</span>
                                                </Link>
                                            </Menu.Item>
                                        ))
                                    }
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
                                                <Link href={`/located/${location.label}`}>
                                                    <span className="py-1 px-6">{location.label}</span>
                                                </Link>
                                            </Menu.Item>
                                        ))
                                    }
                                </Menu.Items>
                            </Transition>
                    </>
                )}
            </Menu>
            
        </ul>
        </>
    )
}