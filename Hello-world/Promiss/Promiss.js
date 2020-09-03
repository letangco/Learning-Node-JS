const axios = require('axios');

const getJSONDogs = async ()=>{
    return await axios.get('https://dog.ceo/api/breeds/list/all');
}

const CountDogs = async () =>{
    const listDogs = await getJSONDogs();
        if(listDogs.data.message)
        {
            // console.log(listDogs.data.message);
            console.log(Object.entries(listDogs.data.message).length);
        }
}
CountDogs();
// const getPost = async () => {
//     // Đếm thời gian giữa 2 dòng code dùng Console.time và console.timeEnd
//     console.time("time");
//     const content = await  CountDogs();
//     const content1 = await getJSONDogs();
//     console.log(`Post Info: `, { content,content1 });
//     console.timeEnd("time");
// };
// getPost();