//POST
axios.post('https://reqres.in/api/users',{
    name :"john",
    jon:"atomation engg"
})
.then(res=> console.log(res))
.catch(err=>console.log(err))