/* eslint-disable react/prop-types */
import { Button, Input, Dialog, DialogHeader, DialogBody, Select, Option } from '@material-tailwind/react';
import { useState, Fragment, useContext } from 'react';
import { useForm } from "react-hook-form"

import React from 'react';
import addExercice from '../fetch/addExercice';
import fetchAllExercices from '../fetch/fetchAllExercices';
import AllExercicesContext from '../context/AllExercicesContext';
import SweetAlertValidation from '../../components/SweetAlertValidation';

function AddExerciceForm({ listMuscleCible }) {
    const [size, setSize] = useState(null);
    const handleOpenModal = (value) => setSize(value);

    const { register, handleSubmit } = useForm();

    const [muscleCible, setMuscleCible] = useState(null);
    const handleChange = (value) => {
        setMuscleCible(value)
    };

    const [, setAllExercices] = useContext(AllExercicesContext);
    const onSubmit = data => {
        data["muscleCible"] = muscleCible
        addExercice(data).then((e) => {
            if (e === true) {
                SweetAlertValidation(true,"L'exercice a été ajouté avec succès")
                fetchAllExercices().then(response => {
                    setAllExercices(response.data)
                })
            }
            handleOpenModal(null)

        })
    }

    return (
        <Fragment>
            <Button onClick={() => handleOpenModal("xl")} className="mt-10 rounded-none" variant="gradient" color='blue'>
                Créer un exercice
            </Button>
            <Dialog open={size === "xl"} size={size || "md"} handler={handleOpenModal}>
                <DialogHeader className='bg-orange-100'> <h6 className='mr-auto ml-auto'> Ajouter un exercice </h6></DialogHeader>
                <DialogBody >
                    <div className='w-full'>
                        <form className='flex flex-col items-center w-full'>
                            <div className='mb-5'>
                                <Input label="Nom de l'exercice" className='!min-w-full' {...register("nom")} />
                            </div>
                            <div className='mb-5'>
                                <Select label="Sélectionner le muscle ciblé" onChange={handleChange} >
                                    {
                                        listMuscleCible.map((muscleCible) => (
                                            <Option value={muscleCible} key={muscleCible}> {muscleCible} </Option>
                                        ))
                                    }
                                </Select>
                            </div>

                            <Button className='mb-5 md:w-2/6' color='green' onClick={handleSubmit(onSubmit)} >Ajouter</Button>
                        </form>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}

export default AddExerciceForm;