import React, { useEffect } from 'react';
import fetchAllSeances from "./fetch/fetchAllSeances"
import { useState } from 'react';

function Seances() {

    const [seanceslist, setSeancesList] = useState([])
    
    useEffect(() => {
        fetchAllSeances().then(response => {
            setSeancesList(response.data)
        })
    },[]);

    
    return (
        <div className='bg-orange-100 mr-auto ml-auto'>
            <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Séances</h1>
            <div className='flex flex-col align items-center'>
                {   
                    seanceslist.map((seance) => (
                        <div key={seance.id}>{seance.attributes.nom}</div>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default Seances;