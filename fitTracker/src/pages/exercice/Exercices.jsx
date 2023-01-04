import React from 'react';
import { useQuery } from "@tanstack/react-query";
import fetchAllExercices from "./fetch/fetchAllExercices"
//import { Button } from "@material-tailwind/react";

function Exercices() {

    const resultsExercices = useQuery(["exercices"], fetchAllExercices);
    const exercices = resultsExercices?.data?.data ?? [];
    
    return (
        <div className='container-exercices'>
            <h1>Exercices</h1>
            <div>
                {   
                    exercices.map((exercice) => (
                        <div key={exercice.id}>{exercice.attributes.nom}</div>
                        
                    ))
                }
            </div>
        </div>
    );
}

export default Exercices;