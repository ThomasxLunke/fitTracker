import React from 'react';
import { useQuery } from "@tanstack/react-query";
import fetchAllExercices from "./fetch/fetchAllExercices"
//import { Button } from "@material-tailwind/react";

function Exercices() {

    const resultsExercices = useQuery(["exercices"], fetchAllExercices);
    const exercices = resultsExercices?.data?.data ?? [];
    
    return (
        <div className='bg-orange-100 w-1/2 mr-auto ml-auto'>
            <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Exercices</h1>
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