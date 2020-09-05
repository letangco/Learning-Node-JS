// const axios = require('axios');
// async function f(){
//     // sau khi promise được resolved, kết quả đó sẽ dược đưa về cho response
//     // Cú pháp await thể hiện phải đợi thực hiện xong ms được thực hiện tác vụ tiếp theo
//     const response = await axios.get('https://api.covid19api.com/');
//     console.log(response);
// }
// f();

const wait = ms => {
    return new Promise((resolve) => {setTimeout(resolve,ms)},(reject) =>{console.log("Lỗi")})
  };
  
  const getContent = async () => {
    await wait(1000);
    return "This is content";
  };
  
  const getComments = async () => {
    await wait(1500);
    return ["comment 1", "comment 2"];
  };
  
  const getRelatedPosts = async () => {
    await wait(2000);
    return ["post 2", "post 3", "post 4"];
  };
  


  const getPost1 = async () => {
    console.time("time");
  
    const content = await getContent();
    const comments = await getComments();
    const relatedPosts = await getRelatedPosts();
  
    console.log(`Post Info: `, { content, comments, relatedPosts });
    console.timeEnd("time");
  };
const getPost = async () => {
    console.time("time");
  
    const [content, comments, relatedPosts,t] = await Promise.all([
      getContent(),
      getComments(),
      getRelatedPosts(),
    ]);
  
    console.log(`Post Info: `, { content, comments, relatedPosts });
    console.timeEnd("time");
  };
  
  
  getPost().then(()=>{console.log("Xử lý thành công")});
  
