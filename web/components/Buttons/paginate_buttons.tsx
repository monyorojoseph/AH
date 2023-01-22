export default function PaginateButton({text, handleClick}:{
    text: string;
    handleClick: Function
}){
    return (
        <button 
        onClick={handleClick()}
        className="rounded-sm text-lg text-opacity-50 border px-6 py-2 my-10 hover:shadow-md">
            {text}
        </button>
    )
}