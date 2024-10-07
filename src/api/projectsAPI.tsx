import axiosInstance from "./axiosInstance";

// export const FetchProject = async()=>{
//     try {
//         let data: any[] = []
//         const response = await axiosInstance.get(`Projects?fields=["*"]`);
//         response.data.data.map(async (each: { name: any; })=>{
//             const response2 = await axiosInstance.get(`Projects/${each.name}`)
//             data.push(response2.data)
//         })
//         return data
//     } catch (error) {
//         console.error("Error Fetching Data: ",error);
//     }
// }



export const FetchProject = async () => {
  try {
    let data: any[] = []
    const response = await axiosInstance.get(`Projects?fields=["*"]`);
    
    const projectDetailsPromises = response.data.data.map(async (each: { name: any; }) => {
      const response2 = await axiosInstance.get(`Projects/${each.name}`);
      return response2.data;
    });
    
    data = await Promise.all(projectDetailsPromises);

    return data;
  } catch (error) {
    console.error("Error Fetching Data: ", error);
  }
};
