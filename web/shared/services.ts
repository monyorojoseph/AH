import axios from "axios"

export const fetcher = async(url: string)=>{
    try{
        const { data } = await axios(url);
        return data
    }catch(e){
        console.log(e)
    }
}

export const poster = async(url: string, postData: any)=> {
    try{
        const { data } = await axios.post(url, postData)
        return data
    } catch(e){
        console.log(e)
    }
}