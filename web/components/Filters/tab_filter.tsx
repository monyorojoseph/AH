
export default function TabFilter({tabs, tab, setTab}:{
    tabs: Array<string>,
    tab: string,
    setTab: Function
}){
    return (
        
        <div className="flex flex-row justify-start items-center space-x-2">
            {
                tabs.map((tb, index)=>(
                    <span key={index}
                    className={`rounded-md cursor-pointer border font-bold text-sm py-1 px-3 
                    ${tab === tb && 'bg-black text-white'}`}
                    onClick={()=>setTab(tb)}>{tb}</span>
                ))
            }
        </div>
    )
}