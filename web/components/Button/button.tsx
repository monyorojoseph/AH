
type props = {
    value: string,
    background: string,
    text: string,
}

export default function Button({value, background, text}:props){
    return (
        <button 
        className={`rounded-md py-1 px-3 border border-${text} bg-${background} text-${text} font-bold`}
        >{value}</button>
    )
}