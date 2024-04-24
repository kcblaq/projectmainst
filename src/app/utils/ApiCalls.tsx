import axios from "axios";

export async function GetData(path: string){
    const response = await axios.get(`https://fe-task-api.mainstack.io/${path}`)
    return response.data
}