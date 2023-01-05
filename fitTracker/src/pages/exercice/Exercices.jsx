import React from 'react';
import { useState, useEffect } from 'react';
import fetchAllExercices from "./fetch/fetchAllExercices"
//import { Button } from "@material-tailwind/react";

function Exercices() {

    const [exerciceslist, setExercicesList] = useState([])
    
    useEffect(() => {
        fetchAllExercices().then(response => {
            setExercicesList(response.data)
        })
    },[]);
    
    return (
        <div className='bg-orange-100 mr-auto ml-auto'>
            <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Exercices</h1>
            <div className='flex flex-col align items-center'>
                {   
                    exerciceslist.map((exercice) => (
                        <div key={exercice.id}>{exercice.attributes.nom}</div>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default Exercices;