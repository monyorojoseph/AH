import React, { useEffect, useState } from "react";
import ScreenButton from "../../components/Buttons/screen_buttons";
import Layout from "../../components/Layout/layout";
import ScreenFour from "../../components/Screens/screen_four";
import ScreenThree from "../../components/Screens/screen_three";
import ScreenOne from "../../components/Screens/screen_one";
import ScreenTwoA from "../../components/Screens/screen_two_a";
import ScreenTwoH from "../../components/Screens/screen_two_h";

const ScreenButtonsValueList = [1, 2, 3, 4]

export default function ListProperty(){
    const [ screen, setScreen ] = useState<number>(1)
    const [ screenButtons, setScreenButtons ] = useState<Array<JSX.Element>>([])
    const [ property, setProperty ] = useState<string>('')
    const [ apartmentData, setApartmentData ] = useState<{}>()
    const [ houseData, setHouseData ] = useState<{}>()


    const createScreenButton = ()=> {
        setScreenButtons(ScreenButtonsValueList.map((v)=> {
            if (screen >= v){
                return (<p key={v}
                className="px-3 py-1 border-2 rounded-lg 
             bg-black text-white font-bold">{v}</p>)
            }
            return (<p key={v}
            className="px-3 py-1 border-2 rounded-lg">{v}</p>)
    }))

    }

    useEffect(()=> {
        createScreenButton()
    }, [screen])

    useEffect(()=> {
        console.log(property)
    }, [property])

    return (
        <Layout>            
            <section className="container mx-auto">
                <div className="lg:w-10/12 lg:mx-auto my-3 space-y-2">
                    <h6 className="text-center text-lg font-bold">List property</h6>

                    <div style={{ height: '60vh'}}
                    className="space-y-1">
                        {screen === 1 && <ScreenOne screen={screen} setScreen={setScreen}
                        property={property} setProperty={setProperty}/>}
                        {screen === 2 && (
                            <>
                                {
                                    property === 'Apartment' ? 
                                    (<ScreenTwoA apartmentData={apartmentData} setApartmentData={setApartmentData}
                                        screen={screen} setScreen={setScreen}/>) 
                                    : (<ScreenTwoH houseData={houseData} setHouseData={setHouseData} 
                                        screen={screen} setScreen={setScreen}/>)
                                }
                            </>
                        )}
                        {screen === 3 && <ScreenThree screen={screen} setScreen={setScreen}/>}
                        {screen === 4 && <ScreenFour />}

                    </div>

                    <div className="flex flex-row justify-start items-center space-x-3">
                            {screen !== 1 &&(<ScreenButton text="Previous" screen={screen} setScreen={setScreen}/>)}
                    </div>

                    <div className="w-full md:w-6/12 lg:w-4/12 mx-auto 
                    flex flex-row justify-between items-center text-xs">
                        {screenButtons}
                    </div>
                </div>
            </section>
        </Layout>
    )
}
