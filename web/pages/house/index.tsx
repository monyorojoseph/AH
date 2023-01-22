import Link from "next/link";
import Layout from "../../components/Layout/layout";
import { fetcher } from "../../shared/services";
import { PropertSummary } from "../../shared/types";


export async function getStaticProps() {
    const data = await fetcher('/property/houses-summary/')
    return {
      props: {data},
    }
  }
  
export default function Houses({data}:{data: Array<PropertSummary> |  null}){
    return (
        <Layout>
            <section className="w-9/12 mx-auto my-5 space-y-4">
                <h6 className="font-bold text-center">All houses</h6>
                <div>

                    <table
                    className="w-full border-separate [border-spacing:0.25rem] table-auto text-left border-2 rounded-md p-2">
                        <thead className='border-b'>
                            <tr className='text-sm'>
                                <th>Type</th>
                                <th>Max price</th>
                                <th>Average price</th>
                                <th>Min price</th>
                                <th>Available</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data?.map((house)=> (
                                    <tr>
                                        <td>
                                            <Link href={`/house/${house.type}`}>
                                                <span
                                                className="text-slate-600 hover:text-black font-semibold">{house.type}</span></Link>
                                        </td>
                                        <td>{house.max}</td>
                                        <td>{house.avg}</td>
                                        <td>{house.min}</td>
                                        <td>{house.available}</td>
                                        <td>{house.total}</td>
                                    </tr>
                                ))
                            }
                            
                            
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}