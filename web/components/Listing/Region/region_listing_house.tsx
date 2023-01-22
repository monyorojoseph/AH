import { useEffect, useState } from "react";
import { BATHROOMS, PRICING, UI_TYPES } from "../../../shared/constants";
import TabFilter from "../../Filters/tab_filter";
import MenuFilter from "../../Filters/menu_filter";
import { useFetchEstate } from "../../../hooks/swr/estate";
import { useRouter } from "next/router";
import HouseListing from "../house_listing";
import HouseMapListing from "../house_map_listing";


export default function RegionListingHouses({region}: {region: string}){
    const { data } = useFetchEstate(region)
    let query_param = `?estate__region=${region}`
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
        
        <div className="space-y-4">
            <div className="flex flex-row justify-start items-center space-x-3">
                <TabFilter tab={tab} setTab={setTab} tabs={UI_TYPES} />
                <MenuFilter 
                qn='pricing'                
                items={PRICING} name="Pricing" />
                <MenuFilter 
                qn='bathrooms' 
                items={BATHROOMS} name="Bathrooms" />
                <MenuFilter 
                qn='estate__slug' 
                items={data} name="Estate" />
            </div>

            { tab === UI_TYPES[0] && <HouseListing queryParams={queryParams!} />}
            { tab === UI_TYPES[1] && <HouseMapListing queryParams={queryParams!}/>}
            
        </div>
    )
}