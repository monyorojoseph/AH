import { Bars3Icon, HomeIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import Button from '../Button/button'
import SubNav from './subnav'

export default function Navbar(){
    return (
        <>
        <header className="bg-black text-white">
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
                                    <h4 className='text-xl font-bold'>Apartment Hunting</h4>
                                </div>
                            </Link>
                        </li>
                        <li className='flex flex-row justify-center items-center space-x-2'>
                            <Button background='white' text='black' value='Sign in' />
                            <Button background='black' text='white' value='Sign up' />
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