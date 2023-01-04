import { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import React from 'react';
import Programme from './components/Programme'
import fetchProgrammes from './fetch/fetchProgrammes';
import { Button } from "@material-tailwind/react";

function Programmes() {


  const [inputParamById, setinputParamById] = useState("");

  const [requestOneProgramme, setRequestOneProgramme] = useState({
    name: 1,
  })

  const resultsProgammes = useQuery(["programmes"], fetchProgrammes);
  const programmes = resultsProgammes?.data?.data ?? [];

  

  return (
    <div className="bg-orange-100 w-1/2 mr-auto ml-auto">
      <h1 className='text-center text-4xl font-bold pb-7 pt-12'>Programmes</h1>
      <div>
        {
          programmes.map((prog) => (
            <Programme key={prog.id} programme={prog.attributes} />
          ))
        }
      </div>
      <h2 className='text-center texte-2xl font-bold py-3.5'>Chosen = {requestOneProgramme.name}</h2>


      <div className='chose-programme'>
        <label htmlFor="chooseprog">
          Chose programme

        </label>
        <input
          className="w-60 mb-5 block"
          type="text"
          name="chooseprog"
          id="chooseprog"
          placeholder="1 or 2 work, 3 not"
          onChange={(e) => { setinputParamById(e.target.value) }}
        />
        <Button className='mr-auto ml-auto' onClick={() => {
          const obj = {
            name: inputParamById,
          };
          setRequestOneProgramme(obj)
        }}>Choose</Button>


      </div>





    </div>
  )
}

export default Programmes
