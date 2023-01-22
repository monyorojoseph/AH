import Layout from "../components/Layout/layout";
import Image from 'next/image'
import Link from "next/link";

import house from '../public/images/house.jpg'
import location from '../public/images/location.jpg'
import apt_1 from '../public/images/apt_1.jpg'

import person from '../public/images/person.jpg'

import { StarIcon } from '@heroicons/react/24/solid'
import { fetcher } from "../shared/services";
import { HomeData } from "../shared/types";

export async function getStaticProps() {
  const data = await fetcher('/property/')
  return {
    props: {data},
  }
}

export default function Home({ data }: {data: HomeData}) {
  return (
    <Layout>
      <section className="container mx-auto">
        <div className="w-10/12 mx-auto my-10 space-y-9">
          <div className="text-center">
            <h5 className="text-xl font-bold">Welcome to the best realtor in Kenya</h5>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">  

              <Link href="/apartment">
                <div className="group rounded-md shadow-sm hover:border-black border">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-md 
                  bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <Image
                      src={apt_1}
                      alt='studio'
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 px-3 pb-3">
                  <p className="text-lg font-bold text-center text-gray-900">Apartments</p>
                    <div className="text-center">
                      <p className="mt-1 text-sm text-gray-500">{data.total_apts} Apartments</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/house">
                <div className="group rounded-md shadow-sm hover:border-black border">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-md 
                  bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <Image
                      src={house}
                      alt='studio'
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 px-3 pb-3">
                  <p className="text-lg font-bold text-center text-gray-900">Houses</p>
                    <div className="text-center">
                      <p className="mt-1 text-sm text-gray-500">{data.total_hses} Houses</p>
                    </div>
                  </div>
                </div>
              </Link>
              <Link href="/region">
                <div className="group rounded-md shadow-sm hover:border-black border">
                  <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-md 
                  bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <Image
                      src={location}
                      alt='studio'
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 px-3 pb-3">
                  <p className="text-lg font-bold text-center text-gray-900">Regions</p>
                    <div className="text-center">
                      <p className="mt-1 text-sm text-gray-500">{data.total_regions} Regions</p>
                    </div>
                  </div>
                </div>
              </Link>
              
          </div>

          <div className="border rounded-md bg-slate-600 flex flex-col md:flex-row 
          text-white py-8 px-4 justify-evenly items-center text-lg font-bold">
            <h6>Get notified when apartment is vacant or add apartment for listing</h6>
            <Link href='/auth/login'><span className="border rounded-md px-5 py-1">Sign up</span></Link>
          </div>

          <div className="space-y-3">
            <h6 className="font-bold text-center">Reviews</h6>

            <div className="flex flex-col lg:flex-row justify-center items-center space-y-3 lg:space-y-0 lg:space-x-3">

              <div className="rounded-md border p-3 flex flex-col justify-center items-start w-full lg:w-1/3 space-y-2">
                <div className="flex flex-row justify-center items-center space-x-3">
                  <div className="h-10 w-10">
                    <Image
                      src={person}
                      alt="person"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-full"
                      />
                  </div>
                  <h6 className="text-sm font-bold">Joane</h6>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quidem quam eveniet sequi ea praesentium quia. 
                  Molestiae iusto voluptate, dolorum deserunt ab architecto, obcaecati nam sapiente nisi, ea natus.</p>
                <div className="flex flex-row justify-start items-start">
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="h-5 w-7"/>
                  <StarIcon className="h-5 w-7"/>
                </div>
              </div> 

              <div className="rounded-md border p-3 flex flex-col justify-center items-start w-full lg:w-1/3 space-y-2">
                <div className="flex flex-row justify-center items-center space-x-3">
                  <div className="h-10 w-10">
                    <Image
                      src={person}
                      alt="person"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-full"
                      />
                  </div>
                  <h6 className="text-sm font-bold">Joane</h6>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quidem quam eveniet sequi ea praesentium quia. 
                  Molestiae iusto voluptate, dolorum deserunt ab architecto, obcaecati nam sapiente nisi, ea natus.</p>
                <div className="flex flex-row justify-start items-start">
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="h-5 w-7"/>
                  <StarIcon className="h-5 w-7"/>
                </div>
              </div> 
              
              <div className="rounded-md border p-3 flex flex-col justify-center items-start w-full lg:w-1/3 space-y-2">
                <div className="flex flex-row justify-center items-center space-x-3">
                  <div className="h-10 w-10">
                    <Image
                      src={person}
                      alt="person"
                      className="h-full w-full object-cover object-center lg:h-full lg:w-full rounded-full"
                      />
                  </div>
                  <h6 className="text-sm font-bold">Joane</h6>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore aliquid quidem quam eveniet sequi ea praesentium quia. 
                  Molestiae iusto voluptate, dolorum deserunt ab architecto, obcaecati nam sapiente nisi, ea natus.</p>
                <div className="flex flex-row justify-start items-start">
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="text-yellow-400 h-5 w-7"/>
                  <StarIcon className="h-5 w-7"/>
                  <StarIcon className="h-5 w-7"/>
                </div>
              </div> 
              

            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}