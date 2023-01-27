/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Input, IconButton, Button } from '@material-tailwind/react';

function SeanceCard({ seance }) {
    const data = seance[0].attributes.exercicesAttribut?.data.exercices
    const nomSeance = seance[0].attributes.nom
    const idSeance = seance[0].id

    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        setDisabled(true)
    }, [idSeance]);

    console.log("id = " + idSeance)

    const handleUpdate = (idSeance) => {
        setDisabled(!disabled)
    }

    return (

        <div className=''>
            <div className='flex justify-between items-center '>
                <h1 className='flex-wrap basis-6/12 py-10 pl-10 font-bold text-3xl'>{nomSeance}</h1>
                <div className='ml-auto flex flex-row basis-6/12 justify-end py-9 pr-10'>
                    {
                        disabled === false &&
                        <Button className='' color='green'>Ajouter un exercice</Button>
                    }
                    <IconButton className={disabled ? ' bg-blue-600' : 'bg-green-600 ml-5'} onClick={disabled ? () => { setDisabled(!disabled) } : () => { handleUpdate(idSeance) }}>
                        {
                            disabled
                                ? <span className="material-symbols-outlined">edit</span>
                                : <span className="material-symbols-outlined">done</span>
                        }
                    </IconButton>
                    <IconButton className='bg-red-600 ml-5'>
                        <span className=" material-symbols-outlined">delete</span>
                    </IconButton>

                </div>
            </div>
            <div className='grid grid-cols-4 border-solid border-2 border-grey-600'>
                <h4 className='border-solid border-r-2 border-grey-600 w-full pl-5'>Nom</h4>
                <h4 className='border-solid border-r-2 border-grey-600 w-full pl-5'>Nombre de série</h4>
                <h4 className='border-solid border-r-2 border-grey-600 w-full pl-5'>Répétition Min.</h4>
                <h4 className='border-solid border-r-2 border-grey-600 w-full pl-5'>Répétition Max.</h4>
            </div>
            {
                data &&
                data.map((exo) => (
                    <div className='grid grid-cols-4 border-solid border-2 border-grey-600' key={exo.id}>
                        <div className='border-solid border-r-2 border-grey-600 py-5'>
                            <Input label="Nom" className="!text-gray-900 !text-xl font-medium object-contain !bg-white !min-w-[0px]"  value={exo.name} disabled={disabled ? "disabled" : ""} />
                        </div>
                        <div className='border-solid border-r-2 border-grey-600 py-5'>
                            <Input label="Nombre de série" className="!text-gray-900 !text-xl font-medium object-contain !bg-white !min-w-0" value={exo.attributes.nbrSerie} disabled={disabled ? "disabled" : ""} />
                        </div>
                        <div className='border-solid border-r-2 border-grey-600 py-5'>
                            <Input label="Répétition Min." className="!text-gray-900 !text-xl font-medium object-contain !bg-white !min-w-0" value={exo.attributes.nbrRepMin} disabled={disabled ? "disabled" : ""} />
                        </div>
                        <div className='border-solid border-r-2 border-grey-600 py-5'>
                            <Input label="Répétition Max." className="!text-gray-900 !text-xl font-medium object-contain !bg-white !min-w-0" value={exo.attributes.nbrRepMax} disabled={disabled ? "disabled" : ""} />
                        </div>
                    </div>
                ))

            }
            {
                !data &&
                <div className='border-2 border-grey-600 h-96 pt-10'>
                    <h1 className='ml-10'>Cette séance ne contient aucun exercice pour le moment.</h1>
                </div>
            }
        </div>
    );
}

export default SeanceCard;