import axiosInstance from "./axiosInstance";

export const FetchExperience = async()=>{
    try {
        const response = await axiosInstance.get(`Experience?fields=["*"]`);
        return response.data
    } catch (error) {
        console.error("Error Fetching Data: ", error);
    }
}