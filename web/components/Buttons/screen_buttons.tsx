export default function ScreenButton({text, screen, setScreen}:{
    text: string;
    screen: number
    setScreen: Function
}){

    const handleClick = ()=> {
        setScreen(screen - 1)
    }
    return (
        <button 
        onClick={handleClick}
        className="rounded-sm text-sm text-opacity-50 border px-3 py-1 hover:shadow-md">
            {text}
        </button>
    )
}