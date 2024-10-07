import axiosInstance from "./axiosInstance";


export const FetchSkills = async()=>{
    try {
        const response = await axiosInstance.get(`Skills?fields=["*"]`);
        // console.log(response.data.data,"YYYYYYYYYYYYYYYYYYYYYYY")
        return response.data
    } catch (error) {
        console.error("Error Fetching Data: ",error);
    }
}