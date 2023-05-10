const urlX = "http://localhost:3000/Clientes"


const opc = {
    "GET": () => getDataAll(),
    "PUT": (data,id) => putData(data,id),
    "DELETE": (id) => deleteData(id),
    "SEARCH": (data) => searchData(data),
    "POST": (data) => postData(data)
}

let config = {
    headers:new Headers({
        "Content-Type": "application/json"
    }), 
};
const getDataAll = async()=>{
    config.method = "GET";
    let res = await ( await fetch("http://localhost:3000/Clientes",config)).json();
    return res;
}
/* const postData = async(data)=>{
    config.method = "POST";
    config.body = JSON.stringify(data);
    let res = await ( await fetch("http://localhost:3000/Clientes",config)).json();
    console.log(res);
} */

const postData = async(data)=>{
    try {
        await fetch(urlX , {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        console.log(error);
    }
}
const putData = async(data,id)=>{
    config.method = "PUT";
    config.body = JSON.stringify(data);
    let res = await ( await fetch(`http://localhost:3000/Clientes${id}`,config)).json();
    console.log(res);
}
const deleteData = async(id)=>{
    config.method = "DELETE";
    let res = await ( await fetch(`http://localhost:3000/Clientes/${id}`,config)).json();
    console.log(res);
}
const searchData = async(data)=>{
    config.method = "GET";
    let res = await ( await fetch(`http://localhost:3000/Clientes=${Object.values(data).join("")}`,config)).json();
    console.log(res);
}
const searchDataById = async(id)=>{
    config.method = "GET";
    let res = await ( await fetch(`http://localhost:3000/Clientes${id}`,config)).json();
    console.log(id);
    return res;
}


export{
    getDataAll,
    postData,
    putData,
    deleteData,
    searchData,
    searchDataById,
    opc 
}