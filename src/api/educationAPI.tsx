import axiosInstance from "./axiosInstance";

export const FetchEducation = async()=>{
    try {
        const response = await axiosInstance.get(`Education?fields=["*"]`);
        return response.data
    } catch (error) {
        console.error("Error Fetching Data: ", error);
    }
}