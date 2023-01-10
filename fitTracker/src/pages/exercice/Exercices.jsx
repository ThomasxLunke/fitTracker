import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import fetchAllExercices from "./fetch/fetchAllExercices"
import ExerciceCard from './components/ExerciceCard';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import AddExerciceForm from './components/AddExerciceForm';

function Exercices() {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
   

    const [exerciceslist, setExercicesList] = useState(()=> {
        fetchAllExercices().then(response => {
            setExercicesList(response.data)
            console.log("yoooo1")
        })
    })
    

    useEffect(() => {
        fetchAllExercices().then(response => {
            console.log("yoooo2")
        })
    }, [exerciceslist]);

    const listMuscleCible = ["Pectoraux", "Triceps", "Biceps", "Dos", "Ischio", "Quadriceps", "Epaules"]
    console.log("here")
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Exercices</h1>
            <Fragment>

                {
                    listMuscleCible.map((muscleCible) => (
                        <Accordion key={muscleCible} className='px-5' open={open === listMuscleCible.indexOf(muscleCible) + 1}>
                            <AccordionHeader onClick={() => handleOpen(listMuscleCible.indexOf(muscleCible) + 1)}>
                                {muscleCible}
                            </AccordionHeader>
                            <AccordionBody className="inline">
                                <div className='flex flex-row align justify-start flex-wrap'>
                                    {
                                        exerciceslist &&
                                        exerciceslist.map((exercice) => (
                                            muscleCible.toUpperCase() === exercice.attributes.muscleCible.toUpperCase() &&
                                            <ExerciceCard key={exercice.id} id={exercice.id} nom={exercice.attributes.nom} muscleCible={exercice.attributes.muscleCible} />
                                        ))
                                    }
                                </div>
                            </AccordionBody>
                        </Accordion>

                    ))
                }
            </Fragment>
            <AddExerciceForm setExercicesList={setExercicesList} listMuscleCible={listMuscleCible}/>
            

        </div>
    );
}

export default Exercices;