import axios from "axios";


export const getData= async ({queryKey})=>{
   // console.log(queryKey)
    const response = await axios.get(queryKey[1])
   // console.log('utils:',response.data)
   if (queryKey.length==3) {
    return response.data.products.filter(obj =>obj.id == queryKey[2])
   }
else    
       
    return response.data
}