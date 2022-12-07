const API = 'http://localhost:5000/clothe'

const getTasks = async () =>{
    const res = await fetch(API)
    return await res.json();
  }