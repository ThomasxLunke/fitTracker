import React, { useContext } from 'react';
import SelectedSeanceContext from '../context/SelectedSeanceContext';
import { Input, IconButton, Button } from '@material-tailwind/react';


// eslint-disable-next-line react/prop-types
function SeancesChoices({ seanceslist }) {

    const [, setSelectedContext] = useContext(SelectedSeanceContext);

    return (
        <div>
            <div className='h-96 overflow-auto border-solid border-2 border-grey-600'>
                <div>
                    {
                        // eslint-disable-next-line react/prop-types
                        seanceslist.map((seance) => (
                            <div
                                className='border-solid border-2 border-grey-600 pl-1 pt-6 pb-6 overflow-hidden'
                                key={seance.id}
                                onClick={() => setSelectedContext(seance)}
                            >
                                {seance.attributes.nom}
                            </div>
                        ))
                    }
                </div>


            </div>
            <div>
                <Button className='w-full rounded-none	' color='blue'>Créer une séance</Button>
            </div>
        </div>

    );
}

export default SeancesChoices;