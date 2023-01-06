import Link from "next/link";
import Layout from "../../components/Layout/layout";

export default function Locations(){
    return (
        <Layout>
            <section className="w-9/12 mx-auto my-5 space-y-4">
                <h6 className="font-bold text-center">All Locations</h6>
                <div>
                    <table
                    className="w-full border-separate [border-spacing:0.25rem] table-auto text-left">
                        <thead className='border-b'>
                            <tr className='text-sm'>
                                <th>Location</th>
                                <th>Apartments</th>
                                <th>Avg price</th>
                                <th>Houses</th>
                                <th>Avg price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Link href='/apartment/Studio'>
                                        <span
                                        className="hover:font-bold">Westlands</span></Link>
                                </td>
                                <td>70</td>
                                <td>40, 000,</td>
                                <td>13</td>
                                <td>8, 000, 000</td>
                            </tr>
                            

                            <tr>
                                <td>Ruiru</td>
                                <td>50</td>
                                <td>30, 000,</td>
                                <td>10</td>
                                <td>4, 000, 000</td>
                            </tr>


                            <tr>
                                <td>Karen</td>
                                <td>50</td>
                                <td>40, 000,</td>
                                <td>23</td>
                                <td>18, 000, 000</td>
                            </tr>


                            <tr>
                                <td>Kilimani</td>                                
                                <td>20</td>
                                <td>40, 000,</td>
                                <td>33</td>
                                <td>12, 000, 000</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}