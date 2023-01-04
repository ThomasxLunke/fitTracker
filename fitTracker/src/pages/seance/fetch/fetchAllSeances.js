async function fetchAllSeances() {
    // Requêter un utilisateur avec un ID donné.

    const res = await fetch(
        `http://localhost:1337/api/seances`
    );
   
        if (!res.ok)
        throw new Error(`seances not find`);
        
    return res.json();
}


export default fetchAllSeances
