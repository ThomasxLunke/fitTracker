import { useState, useEffect } from 'react'
import React from 'react';
import Programme from './components/Programme'
import fetchAllProgrammes from './fetch/fetchAllProgrammes';


function Programmes() {


  const [programmeslist, setProgrammesList] = useState([])
    
    useEffect(() => {
        fetchAllProgrammes().then(response => {
          setProgrammesList(response.data)
        })
    },[]);

  return (
    <div className="bg-orange-100 mr-auto ml-auto">
      <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Programmes</h1>
      <div className='flex flex-col align items-center'>
        {
          programmeslist.map((prog) => (
            <Programme key={prog.id} programme={prog.attributes} />
          ))
        }
      </div>
    </div>
  )
}

export default Programmes
