import axiosInstance from "./axiosInstance";

export const FetchAchievements = async()=>{
    try {
        const response = await axiosInstance.get(`Achievements?fields["*"]`);
        console.log(response.data,"YYYYYYYYYYYYYYYYYYYYYYY")
        return response.data
    } catch (error) {
        console.error("Error Fetching Data: ",error);
    }
}