import { Button, Input, Dialog, DialogHeader, DialogBody, DialogFooter, Select, Option } from '@material-tailwind/react';
import { useState, Fragment } from 'react';
import { useForm } from "react-hook-form"

import React from 'react';
import addExercice from '../fetch/addExercice';
import fetchAllExercices from '../fetch/fetchAllExercices';

function AddExerciceForm({ listMuscleCible,setExercicesList  }) {
    const [size, setSize] = useState(null);
    const handleOpenModal = (value) => setSize(value);

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [value, setValue] = useState(null);
    const handleChange = (value) => {
        setValue(value)
    };

    const onSubmit = data => {
        data["muscleCible"] = value
        addExercice(data).then((e) =>{
            if (e===true)
            {
                console.log("yeeeeah")
                fetchAllExercices().then(response=>{
                    console.log("yaaaa")
                    setExercicesList(response.data)
                })
            }
            handleOpenModal(null)
                
        })
        
    
    }

    return (
        <Fragment>
            <Button onClick={() => handleOpenModal("xl")} className="mt-10" variant="gradient" color='green'>
                Ajouter un exercice
            </Button>
            <Dialog open={size === "xl"} size={size || "md"} handler={handleOpenModal}>
                <DialogHeader>Ajouter un exercice</DialogHeader>
                <DialogBody >
                    <div className='w-full'>
                        <form className='flex flex-col items-center'>
                            <div className='mb-5 w-5/6'>
                                <Input label="Nom de l'exercice" className='' {...register("nom")} />
                            </div>
                            <div className='mb-5 w-5/6'>
                                <Select label="Sélectionner le muscle ciblé" onChange={handleChange} >
                                    {
                                        listMuscleCible.map((muscleCible) => (
                                            <Option value={muscleCible} key={muscleCible}> {muscleCible} </Option>
                                        ))
                                    }
                                </Select>
                            </div>

                            <Button className='mb-5 w-5/6' color='green' onClick={handleSubmit(onSubmit)} >Ajouter</Button>
                        </form>
                    </div>
                </DialogBody>
            </Dialog>
        </Fragment>
    );
}

export default AddExerciceForm;