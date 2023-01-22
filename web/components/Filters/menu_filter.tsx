import { Menu, Transition } from "@headlessui/react"
import { ChevronDownIcon } from "@heroicons/react/20/solid"
import { Item } from "../../shared/types"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"


export default function MenuFilter({name, items, qn}:{
    name: string,
    qn: string,
    items: Array<Item>
}){ 
    const [ item, setItem ] = useState<Item>()
    const router = useRouter()
    useEffect(()=>{
        let value = item?.value
        if (qn==='pricing' && value){
            value = value === 'ce' ? 'price' : '-price'             
            router.push({ query: { ...router.query, 'ordering': value } }, undefined, { shallow: true });
        }
        if(qn==='estate__slug' && value){
            router.push({ query: { ...router.query, 'estate__slug': value } }, undefined, { shallow: true });
        }
        if(qn==='bathrooms' && value){
            router.push({ query: { ...router.query, 'bathrooms': value } }, undefined, { shallow: true });
        }
    }, [item])
    return (
            <Menu as='div'
            className="relative cursor-pointer">
                {({open})=>(
                    <>
                        <Menu.Button 
                        className='p-1 flex flex-row justify-center items-center space-x-1 border rounded-md px-3 py-1 hover:border-black'>
                            <span>{item?.label ? item.label : name}</span>
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
                                        items?.map((itm)=>(
                                            <Menu.Item key={itm.label}>
                                                    <span className={`py-1 px-6 w-full 
                                                    ${item?.value === itm.value && "font-bold text-opacity-75"}`}
                                                    onClick={()=> setItem(itm)}>{itm.label}</span>
                                            </Menu.Item>
                                        ))
                                    }
                                </Menu.Items>
                            </Transition>
                    </>
                )}
            </Menu>     )
}