import React from 'react';
import { useQuery } from "@tanstack/react-query";
import fetchAllSeances from "./fetch/fetchAllSeances"

function Seances() {

    const resultsSeances = useQuery(["seances"], fetchAllSeances);
    const seances = resultsSeances?.data?.data ?? [];
    
    return (
        <div className='bg-orange-100 w-1/2 mr-auto ml-auto'>
            <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Séances</h1>
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