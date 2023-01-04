async function fetchProgrammes() {

    const res = await fetch(
        `http://localhost:1337/api/programmes`
    );
    if (!res.ok)
        throw new Error(`programmes not find`);
      
    return res.json();


    
  }
  
  export default fetchProgrammes;