import { useRouter } from "next/router";
import Layout from "../../components/Layout/layout";
import { useState } from "react";
import RegionListingApartments from "../../components/Listing/Region/region_listiing_apartments";
import RegionListingHouses from "../../components/Listing/Region/region_listing_house";
import TabFilter from "../../components/Filters/tab_filter";



const PROPEERTIES = [ "Apartments", "Houses"]

export default function Region(){
    const router = useRouter()
    const region = router.query['region'] as string;
    const [ tab, setTab ] = useState<string>(PROPEERTIES[0])

    return (
        <Layout>
        <section className="container mx-auto">
            <div className="lg:w-10/12 lg:mx-auto my-5 space-y-4">
                <h6 className="text-center text-lg font-bold">{region} region</h6>

                <TabFilter tab={tab} tabs={PROPEERTIES} setTab={setTab} />

                <div>
                    <div className="space-y-4">
                        { tab === PROPEERTIES[0] && <RegionListingApartments region={region}/>}
                        { tab === PROPEERTIES[1] && <RegionListingHouses />}
                    </div>
                </div>
            </div>
        </section>
        </Layout>
    )
}
