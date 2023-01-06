import { Bars3Icon, HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import SubNav from './subnav'

export default function Navbar(){
    return (
        <>
        <header className="bg-black text-white">
            <nav className="container mx-auto py-2">
                <div className='w-9/12 mx-auto py-2'>
                    <Link href='/'>
                        <div className='flex flex-row justify-center items-center space-x-2'>
                            <HomeIcon className='h-7 w-9' />
                            <h4 className='text-xl font-bold'>Apartment Hunting</h4>
                        </div>
                    </Link>
                </div>
            </nav>
        </header>

        <div className='my-1 py-1 border-b-4 border-black'>
            <SubNav />
        </div>
        </>
    )
}