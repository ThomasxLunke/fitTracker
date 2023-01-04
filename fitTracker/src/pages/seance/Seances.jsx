import React from 'react';
import { useQuery } from "@tanstack/react-query";
import fetchAllSeances from "./fetch/fetchAllSeances"

function Seances() {

    const resultsSeances = useQuery(["seances"], fetchAllSeances);
    const seances = resultsSeances?.data?.data ?? [];
    
    return (
        <div className='container-seances'>
            <h1>Séances</h1>
            <div>
                {   
                    seances.map((seance) => (
                        <div key={seance.id}>{seance.attributes.nom}</div>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default Seances;