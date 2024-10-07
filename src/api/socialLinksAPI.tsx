import axiosInstance from "./axiosInstance";

export const FetchSocialLinks = async()=>{
    try {
        const response = await axiosInstance.get(`Social Link?fields=["*"]`);
        // console.log(response.data.data,"YYYYYYYYYYYYYYYYYYYYYYY")
        return response.data
    } catch (error) {
        console.error("Error Fetching Data: ",error);
    }
}