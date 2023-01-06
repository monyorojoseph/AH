import Link from "next/link";
import Layout from "../../components/Layout/layout";

export default function Houses(){
    return (
        <Layout>
            <section className="w-9/12 mx-auto my-5 space-y-4">
                <h6 className="font-bold text-center">All houses</h6>
                <div>

                    <table
                    className="w-full border-separate [border-spacing:0.25rem] table-auto text-left">
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
                                        className="hover:font-bold">Two bedroom</span></Link>
                                </td>
                                <td>18, 000, 000</td>
                                <td>8, 000, 000</td>
                                <td>6, 000, 000</td>
                                <td>8</td>
                                <td>9</td>
                            </tr>
                            

                            <tr>
                                <td>Three bedroom</td>
                                <td>35, 000, 000</td>
                                <td>22, 000, 000</td>
                                <td>15, 000, 000</td>
                                <td>1</td>
                                <td>7</td>
                            </tr>


                            <tr>
                                <td>Four bedroom</td>
                                <td>45, 000, 000</td>
                                <td>32, 000, 000</td>
                                <td>25, 000, 000</td>
                                <td>2</td>
                                <td>8</td>
                            </tr>


                            <tr>
                                <td>Five bedroom</td>
                                <td>55, 000, 000</td>
                                <td>40, 000, 000</td>
                                <td>35, 000, 000</td>
                                <td>1</td>
                                <td>5</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}