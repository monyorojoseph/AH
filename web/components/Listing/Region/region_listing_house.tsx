import { useState } from "react";
import { PRICING, UI_TYPES } from "../../../shared/constants";
import TabFilter from "../../Filters/tab_filter";
import MenuFilter from "../../Filters/menu_filter";
import { Item } from "../../../shared/types";

export default function RegionListingHouses(){

    const [ tab, setTab ] = useState<string>(UI_TYPES[0])
    const [ pricingItem, setPricingItem ] = useState<Item>(PRICING[0])

    return (
        
        <div className="space-y-4">
            <div className="flex flex-row justify-start items-center space-x-3">
                <TabFilter tab={tab} setTab={setTab} tabs={UI_TYPES} />
                <MenuFilter item={pricingItem} setItem={setPricingItem} items={PRICING} name="Pricing" />
            </div>
{/* 
            { tab === UI_TYPES[0] && <Listing listings={listings} />}
            { tab === UI_TYPES[1] && <ListingMap listings={listings}/>} */}
            
        </div>
    )
}