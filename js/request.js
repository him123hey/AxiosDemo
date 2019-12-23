axios({
    method:'get',
    url:'https://jsonplaceholder.typicode.com/users',
})
.then( Response => getUser(Response.data))
.catch( erro => console.log("error"));
function getUser(data){
    data.forEach(element => {
        console.log(element);
    });
}