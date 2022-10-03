export const Promise_Function = () => {
    const myPromise = new Promise((resolved,rejected) => {
    const bool = true;
    if (bool) {
        resolved("Resolved!");
    } else {
        rejected("Rejected!");
    }
});
// // if execute
console.log(myPromise);
myPromise.then((val) => {
    console.log(val);
})
// else execute
myPromise.catch((val) => {
    console.log(val);
})};

export const Fetch_Function =  () => {
  const Data = {
    UserList: []
  } ;

  const myAsync_Function = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); //full data read, then go forward
    const response_json = await response.json();
    // const Email_response_json =  response_json.map((data) =>{
    //     return data.email;
    // })
    // console.log(Email_response_json);
    return response_json;
  };

  const myAsync_Function_Read = async () => {
    const data = await myAsync_Function(); // waits to myAsync_Function() execute
    Data.UserList = data;
    console.log(Data.UserList);
  } 
  
  myAsync_Function_Read(); //2
  console.log(Data.UserList); //1
}

