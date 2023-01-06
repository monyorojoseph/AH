import Link from "next/link";
import Layout from "../../components/Layout/layout";

export default function Apartments(){
    return (
        <Layout>
            <section className="w-9/12 mx-auto my-5 space-y-4">
                <h6 className="font-bold text-center">All apartments</h6>
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
                            <tr>
                                <td>
                                    <Link href='/apartment/Studio'>
                                        <span
                                        className="hover:font-bold">Studio</span></Link>
                                </td>
                                <td>18, 000</td>
                                <td>8, 000</td>
                                <td>6, 000</td>
                                <td>8</td>
                                <td>19</td>
                            </tr>
                            

                            <tr>
                                <td>One bedroom</td>
                                <td>35, 000</td>
                                <td>22, 000</td>
                                <td>15, 000</td>
                                <td>12</td>
                                <td>47</td>
                            </tr>


                            <tr>
                                <td>Two bedroom</td>
                                <td>45, 000</td>
                                <td>32, 000</td>
                                <td>25, 000</td>
                                <td>20</td>
                                <td>89</td>
                            </tr>


                            <tr>
                                <td>Three bedroom</td>
                                <td>55, 000</td>
                                <td>40, 000</td>
                                <td>35, 000</td>
                                <td>10</td>
                                <td>59</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}