export default function ScreenOne({property,  setProperty, screen, setScreen}: {
    property: string
    setProperty: Function
    screen: number
    setScreen: Function
}){
    return (
        <div className="h-full overflow-y-auto flex flex-col justify-end">
            <form onSubmit={(e: React.SyntheticEvent)=> setScreen(screen + 1)}>
                    <div className="w-full md:w-10/12 lg:w-8/12 mx-auto">
                        <div className="my-36">
                            <div className="flex items-center">
                                <input
                                id="apartment"
                                name="property"
                                type="radio"
                                checked={property === "Apartment"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setProperty('Apartment')}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="apartment" className="ml-3 block text-sm font-medium text-gray-700">
                                Apartment
                                </label>
                            </div>

                            <div className="flex items-center">
                                <input
                                id="house"
                                name="property"
                                type="radio"
                                checked={property === "House"}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>)=> setProperty('House')}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label htmlFor="house" className="ml-3 block text-sm font-medium text-gray-700">
                                    House
                                </label>
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button type="submit"
                            className="px-3 py-1 rounded-md border">Save</button>
                        </div>
                    </div>
            </form>
        </div>
    )
}