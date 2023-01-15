/* eslint-disable react/prop-types */
import React from 'react';
import {Fragment, useState, useContext} from 'react';
import ExerciceSeanceSticker from './ExerciceSeanceSticker';
import ModalDeleteExercice from './ModalDeleteExercice';

import {Accordion, AccordionHeader, AccordionBody, IconButton, Input} from "@material-tailwind/react";
import updateExercice from '../fetch/updateExercice';
import fetchAllExercices from '../fetch/fetchAllExercices';
import AllExercicesContext from '../context/AllExercicesContext';
import SweetAlertValidation from '../../components/SweetAlertValidation';
// eslint-disable-next-line react/prop-types, no-unused-vars
function ExerciceCard({ id, nom, muscleCible, seances }) {

    const [open, setOpen] = useState(0);
    const [hookNom, setHookNom] = useState(nom)
    const handleOpen = (value) => {
        if (disabled)
        {
            setOpen(open === value ? 0 : value);
        }
        else 
        {
            setOpen(open === value ? value : 0);
        }
    };
    const [, setAllExercices] = useContext(AllExercicesContext);
    const handleUpdate = (id, nom)  => updateExercice(id, nom).then((response) =>{
        if (response === true){
            SweetAlertValidation(true,"L'exercice a été mis à jour avec succès")
            setDisabled(!disabled)
            fetchAllExercices().then(response => {
                setAllExercices(response.data)
            })
        }

    })

    const handleChange = (e) => {
        setHookNom(e.target.value)
    }
    //console.log(disabled)
    //
    const [disabled, setDisabled] = useState(true)
    
    return (
        <div className="flex justify-center mr-5  h-full w-full mt-2 md:mr-3">
            <Fragment>
                <div className="flex flex-col w-full md:w-full bg-orange-100 rounded-lg shadow-lg ">
                    <div className="pl-3 mr-3 flex flex-col justify-start">
                        <Accordion open={open === 1}>
                            <AccordionHeader onClick={() => handleOpen(1)} className="">
                                <Input label="Nom" className="!text-gray-900 !text-xl font-medium object-contain !bg-orange-100" value={hookNom} onChange={handleChange} disabled={disabled ? "disabled" : ""} />
                            </AccordionHeader>
                            <AccordionBody>
                                <div className='flex justify-between'>
                                    <div className='flex flex-wrap basis-3/4'>
                                        {
                                            seances.map((seance) => (
                                                <ExerciceSeanceSticker key={seance.attributes.nom} seanceName={seance.attributes.nom} />
                                            ))
                                        }
                                    </div>
                                    <div className='ml-auto flex flex-row basis-1/4 justify-end'>
                                        <IconButton className={disabled ? ' bg-blue-600 mr-2' :'bg-green-600 mr-2'} onClick={ disabled ? () => {setDisabled(!disabled)} : () => {handleUpdate(id,hookNom)}}>
                                            {
                                                disabled 
                                                ? <span className="material-symbols-outlined">edit</span>
                                                : <span className="material-symbols-outlined">done</span>
                                            }      
                                        </IconButton>
                                        <ModalDeleteExercice idExercice={id} nomExercice={nom}/>
                                    </div>
                                </div>
                            </AccordionBody>
                        </Accordion>
                    </div>
                </div>
            </Fragment>
            
        </div>
    );
}

export default ExerciceCard;