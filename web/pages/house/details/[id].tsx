import { useRouter } from "next/router";
import Layout from "../../../components/Layout/layout";
import Images from "../../../components/PropertyDetails/images";
import HouseDetail from "../../../components/PropertyDetails/house_details";

export default function HouseDetails(){
    const router = useRouter()
    const id  = router.query['id']
    return(
        <Layout>
            <section className="w-full lg:w-10/12 mx-auto my-5">
                <div className="grid gap-3  grid-cols-2">
                    <div className="col-span-2 lg:col-span-1">
                        <Images />
                    </div>
                    <div className="col-span-2 lg:col-span-1">
                        <HouseDetail />
                    </div>

                </div>
            </section>
        </Layout>
    )
}