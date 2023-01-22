import { useEffect, useState } from "react";
import Layout from "../../Layout/layout";
import ApartmentListing from "../apartment_listing";
import ApartmentMapListing from "../apartment_map_listing";
import TabFilter from "../../Filters/tab_filter";
import { PRICING, UI_TYPES } from "../../../shared/constants";
import MenuFilter from "../../Filters/menu_filter";
import { useRouter } from "next/router";


type props  = {
    type: string,
}

export default function ListApartments({type}:props){
    let query_param = `?type=${type}`
    const router = useRouter()
    const [ tab, setTab ] = useState<string>(UI_TYPES[0])
    const [ queryParams, setQueryParams ] = useState<string>()

    useEffect(()=> {
        const otherParams = router.asPath.split('?')[1]
        if (otherParams){
            query_param = `${query_param}&${otherParams}`
        }
        setQueryParams(query_param)        
    }, [router.asPath])

    return (
        <Layout>
            <section className="container mx-auto">
                <div className="lg:w-10/12 lg:mx-auto my-5 space-y-4">
                    <h6 className="text-center text-lg font-bold">{type} apartments</h6>
                    <div className="space-y-4">
                        <div className="flex flex-row justify-start items-center space-x-3">
                            <TabFilter tab={tab} setTab={setTab} tabs={UI_TYPES} />
                            <MenuFilter qn='pricing' items={PRICING} name="Pricing" />
                        </div>

                        { tab === UI_TYPES[0] && <ApartmentListing queryParams={queryParams!} />}
                        { tab === UI_TYPES[1] && <ApartmentMapListing queryParams={queryParams!}/>}
                    
                    </div>
                </div>
            </section>
        </Layout>
    )
}