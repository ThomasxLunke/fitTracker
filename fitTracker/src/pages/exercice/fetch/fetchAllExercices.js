async function fetchAllExercices() {
    // Requêter un utilisateur avec un ID donné.

    const res = await fetch(
        `http://localhost:1337/api/exercices`
    );
   
        if (!res.ok)
        throw new Error(`exercices not find`);
        
    return res.json();
}


export default fetchAllExercices
