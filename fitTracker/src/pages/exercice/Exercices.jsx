import React from 'react';
import { useState, useEffect, Fragment, useContext } from 'react';
import fetchAllExercices from "./fetch/fetchAllExercices"
import ExerciceCard from './components/ExerciceCard';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import ModalAddExerciceForm from './components/ModalAddExerciceForm';
import AllExercicesContext from './context/AllExercicesContext';

function Exercices() {

    const [, setAllExercices] = useContext(AllExercicesContext);
    const [allExercices] = useContext(AllExercicesContext);
    useEffect(() => {
        fetchAllExercices().then(response => {
            setAllExercices(response.data)
        })
    }, []);

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    const listMuscleCible = ["Pectoraux", "Triceps", "Biceps", "Dos", "Ischio", "Quadriceps", "Epaules"]

    return (
        <div className='flex flex-col items-center w-full h-full'>
            <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Exercices</h1>
            <Fragment>
                {
                    listMuscleCible.map((muscleCible, index) => (
                        <Accordion key={muscleCible} className='px-5' open={open === index + 1}>
                            <AccordionHeader onClick={() => handleOpen(index + 1)}>
                                {muscleCible}
                            </AccordionHeader>
                            <AccordionBody className="inline">
                                <div className='flex flex-row align justify-start flex-wrap'>
                                    {
                                        allExercices.map((exercice) => (
                                            muscleCible.toUpperCase() === exercice.attributes.muscleCible.toUpperCase() &&
                                            <ExerciceCard key={exercice.id} id={exercice.id} nom={exercice.attributes.nom} muscleCible={exercice.attributes.muscleCible} seances={exercice.attributes.seances.data} />
                                        ))
                                    }
                                </div>
                            </AccordionBody>
                        </Accordion>

                    ))
                }
            </Fragment>
            <ModalAddExerciceForm listMuscleCible={listMuscleCible} />
        </div>
    );
}
export default Exercices;