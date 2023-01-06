import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import fetchAllExercices from "./fetch/fetchAllExercices"
import ExerciceCard from './components/ExerciceCard';

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Exercices() {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const [exerciceslist, setExercicesList] = useState([])
    useEffect(() => {
        fetchAllExercices().then(response => {
            setExercicesList(response.data)
        })
    }, []);

    const listMuscleCible =["Pectoraux", "Triceps", "Biceps", "Dos", "Ischio", "Quadriceps","Epaules"]
    listMuscleCible.map((muscleCible) => {
        console.log(listMuscleCible.indexOf(muscleCible) +1)
    })
    
    return (
        <Fragment>
            <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Exercices</h1>
            {
                    listMuscleCible.map((muscleCible) => (
                        <Accordion key={muscleCible} className='px-5' open={open === listMuscleCible.indexOf(muscleCible) +1}>
                            <AccordionHeader  onClick={() => handleOpen(listMuscleCible.indexOf(muscleCible) +1)}>
                                {muscleCible}
                            </AccordionHeader>
                            <AccordionBody  className="inline">
                                <div className='flex flex-row align justify-start flex-wrap'>
                                    {
                                        exerciceslist.map((exercice) => (
                                             muscleCible.toUpperCase()===exercice.attributes.muscleCible.toUpperCase() &&
                                            <ExerciceCard key={exercice.id} id={exercice.id} nom={exercice.attributes.nom} muscleCible={exercice.attributes.muscleCible} /> 
                                        ))
                                    }
                                </div>
                            </AccordionBody>
                        </Accordion>
                    ))
            }
        </Fragment>
    );
}

export default Exercices;