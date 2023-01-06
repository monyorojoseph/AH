import { Bars3Icon, HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import SubNav from './subnav'

export default function Navbar(){
    return (
        <>
        <header className="bg-black text-white font-bold">
            <nav className="container mx-auto py-2">
                <div className='w-9/12 mx-auto'>
                    <ul className='list-none flex flex-row justify-between items-center'>
                        <li>
                        <Bars3Icon className="h-10 w-12"/>
                        </li>
                        <li>
                            <Link href='/'>
                                <div className='flex flex-row justify-center items-center space-x-2'>
                                    <HomeIcon className='h-7 w-9' />
                                    <h4 className='text-xl'>Apartment Hunting</h4>
                                </div>
                            </Link>
                        </li>
                        <li className='flex flex-row justify-center items-center space-x-2'>
                            <Link href='/auth/login'>
                                <span className='rounded-md py-1 px-3 border-2'>Sign In</span></Link>
                            <Link href='/auth/register'>
                                <span className='rounded-md py-1 px-3 bg-white text-black border-2 border-white'>Sign Up</span></Link>
                        </li>
                </ul>
                </div>
            </nav>
        </header>

        <div className='my-1 py-1 border-b-4 border-black hidden lg:block'>
            <SubNav />
        </div>
        </>
    )
}