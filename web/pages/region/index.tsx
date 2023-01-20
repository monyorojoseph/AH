import Link from "next/link";
import Layout from "../../components/Layout/layout";


export default function Regions(){
    return (
        <Layout>

            <section className="w-9/12 mx-auto my-5 space-y-4">
                <h6 className="font-bold text-center">All Regions</h6>
                <div>

                    <table
                    className="w-full border-separate [border-spacing:0.25rem] table-auto text-left border-2 rounded-md p-2">
                        <thead className='border-b'>
                            <tr className='text-sm'>
                                <th>Region</th>
                                <th>Estates</th>
                                <th>Apartments</th>
                                <th>Houses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <Link href='/region/Nairobi'>
                                        <span
                                        className="hover:font-bold">Nairobi</span></Link>
                                </td>
                                <td>18</td>
                                <td>8</td>
                                <td>6</td>
                    
                            </tr>
                            

                            <tr>
                                <td>Mombasa</td>
                                <td>35</td>
                                <td>22</td>
                                <td>15</td>
                            </tr>


                            <tr>
                                <td>Nakuru</td>
                                <td>45</td>
                                <td>32</td>
                                <td>25</td>
                            </tr>
                            
                            
                        </tbody>
                    </table>
                </div>
            </section>
        </Layout>
    )
}