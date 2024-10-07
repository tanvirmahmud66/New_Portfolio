import axiosInstance from "./axiosInstance";

export const FetchPersonalInfo = async()=>{
    try {
        const response = await axiosInstance.get(`Personal Info/Personal Info?fields=["*"]`);
        return response.data
    } catch (error) {
        console.error("Error Fetching Data: ", error);
    }
}

