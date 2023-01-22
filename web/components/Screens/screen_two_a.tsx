export default function ScreenTwoA({apartmentData, setApartmentData, screen, setScreen}:{
    screen: number
    setScreen: Function
    apartmentData: {} | undefined 
    setApartmentData: Function
}){
    // price
    // similar units
    // available units
    // apt name
    // type
    return (
        <div className="h-full overflow-y-auto">
            <form onSubmit={(e: React.SyntheticEvent)=> setScreen(screen + 1)}>
                <div className="grid grid-cols-6 gap-3">

                        <div className="col-span-6 sm:col-span-3">
                            <label className="block text-xs font-medium text-gray-700">
                                Apartment name
                            </label>
                            <input
                                type="text"
                                name="name"
                                autoComplete="name"
                                className="mt-1 block w-full py-2 px-3 border rounded-md border-gray-300 shadow-sm 
                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Apartment type
                            </label>
                            <select
                                name="type"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 
                                shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option>Studio</option>
                                <option>One bedroom</option>
                                <option>Two bedroom</option>
                            </select>
                        </div>
                        

                        <div className="col-span-6 sm:col-span-2">
                            <label className="block text-xs font-medium text-gray-700">
                                Price
                            </label>
                            <input
                                type="number"
                                name="price"
                                autoComplete="price"
                                className="mt-1 block w-full py-2 px-3 border rounded-md border-gray-300 shadow-sm 
                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-2">
                            <label className="block text-xs font-medium text-gray-700">
                                Similar units
                            </label>
                            <input
                                type="number"
                                name="similar"
                                autoComplete="similar"
                                className="mt-1 block w-full py-2 px-3 border rounded-md border-gray-300 shadow-sm 
                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-2">
                            <label className="block text-xs font-medium text-gray-700">
                                Available units
                            </label>
                            <input
                                type="number"
                                name="available"
                                autoComplete="available"
                                className="mt-1 block w-full py-2 px-3 border rounded-md border-gray-300 shadow-sm 
                                focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div className="col-span-6">
                            <label className="block text-sm font-medium text-gray-700">Images</label>
                            <div className="mt-1 flex justify-center rounded-md border-2 border-dashed
                             border-gray-300 px-6 pt-3 pb-4">
                                <div className="space-y-1 text-center">
                                    <svg
                                    className="mx-auto h-12 w-12 text-gray-400"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    aria-hidden="true"
                                    >
                                    <path
                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 
                                        4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    </svg>
                                    <div className="flex text-sm text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload images</span>
                                            <input id="file-upload" name="images" type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                    </div>

                </div>

                <div className="flex justify-end my-2">
                    <button type="submit"
                    className="px-3 py-1 rounded-md border">Save</button>
                </div>
            </form>
        </div>
    )
}