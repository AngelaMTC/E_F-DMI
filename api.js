const API = 'http://localhost:3000'

const getTasks = async () =>{
    const res = await fetch(API)
    return await res.json();
  }