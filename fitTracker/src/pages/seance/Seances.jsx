import React, { useEffect } from 'react';
import fetchAllSeances from "./fetch/fetchAllSeances"
import { useState } from 'react';

import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

import SeanceCard from './components/SeanceCard';
import SeancesChoices from './components/SeancesChoices';
import SelectedSeanceContext from './context/SelectedSeanceContext';



import 'react-big-calendar/lib/css/react-big-calendar.css';


function Seances() {

    const [seanceslist, setSeancesList] = useState([])

    useEffect(() => {
        fetchAllSeances().then(response => {
            setSeancesList(response.data)
        })
    }, []);

    const localizer = momentLocalizer(moment) // or globalizeLocalizer
    const selectedContext = useState(null);

    return (
        <SelectedSeanceContext.Provider value={selectedContext}>
            <div className='h-full w-full'>
                <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Séances</h1>

                <div className='grid grid-cols-6 gap-10 xl:gap-7 2xl:gap-10 sm:gap-10 px-5'>
                    <div className="h-full col-span-6 xl:col-span-5">
                        <Calendar
                            localizer={localizer}
                            startAccessor="start"
                            endAccessor="end"
                        />
                    </div>
                    <div className='col-span-6 xl:col-span-1 '>
                        <SeancesChoices seanceslist={seanceslist} />
                    </div>
                    {
                        selectedContext[0] && 
                        <div className='col-span-6 border-solid border-2 border-grey-600 h-96 overflow-auto'>
                            <SeanceCard seance={selectedContext}/>
                        </div>
                    }
                    
                </div>

            </div>
        </SelectedSeanceContext.Provider>


    );
}

/*
 <div className='flex flex-col align items-center'>
                {   
                    seanceslist.map((seance) => (
                        <div key={seance.id}>{seance.attributes.nom}</div>
                        
                    ))
                }
            </div> 
*/
export default Seances;