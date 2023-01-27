/* eslint-disable react/prop-types */
import { Button, Dialog, DialogHeader, DialogBody,IconButton } from '@material-tailwind/react';
import { React, useState, Fragment, useContext, memo } from 'react';
import deleteExercice from '../fetch/deleteExercice';
import AllExercicesContext from '../context/AllExercicesContext';
import fetchAllExercices from '../fetch/fetchAllExercices';
import SweetAlertValidation from '../../components/SweetAlertValidation';

function ModalDeleteExercice({nomExercice, idExercice}) {
    
    const [size, setSize] = useState(null);
    const handleOpen = (value) => setSize(value);
    const [, setAllExercices] = useContext(AllExercicesContext);
    const handleDelete = (id) => deleteExercice(id).then((response) => {
        if (response === true) {
            SweetAlertValidation(true,"L'exercice a été supprimé avec succès")
            fetchAllExercices().then(response => {
                setAllExercices(response.data)
            })
        }
        handleOpen(null)
    })
    return (
        <div>
            <Fragment>
                <IconButton  onClick={() => handleOpen("xl")} className='bg-red-600'>
                    <span className=" material-symbols-outlined">delete</span>
                </IconButton>
                <Dialog open={size === "xl"} size={size || "md"} handler={handleOpen}>
                    <DialogHeader className='bg-orange-100'> <h6 className='mr-auto ml-auto'> Voulez-vous vraiment supprimer : {nomExercice} </h6></DialogHeader>
                    <DialogBody >
                        <div className='flex justify-evenly '>
                            <Button className='mb-5 md:w-2/6' color='gray' onClick={() => handleOpen(null)}>Annuler</Button>  
                            <Button className='mb-5 md:w-2/6' color='red' onClick={() => handleDelete(idExercice)}>Supprimer</Button> 
                        </div>
                    </DialogBody>
                </Dialog>
            </Fragment>
        </div>
    );
}

export default memo(ModalDeleteExercice);