import { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import React from 'react';
import Programme from './components/Programme'
import fetchProgrammes from './fetch/fetchProgrammes';
//import fetchOneProgramme from './fetch/fetchOneProgramme';
import "./style/style.css"




function Programmes() {


  const [inputParamById, setinputParamById] = useState("");

  const [requestOneProgramme, setRequestOneProgramme] = useState({
    name: 1,
  })

  const resultsProgammes = useQuery(["programmes"], fetchProgrammes);
  const programmes = resultsProgammes?.data?.data ?? [];

  //const resultOneProgamme = useQuery(["programme", requestOneProgramme], fetchOneProgramme);

  /*const resultOneProgamme = (id) => {
    const {isError, isLoading, data} = useQuery(["programme",id], () => {
      return fetch(`http://localhost:1337/api/pr ogrammes/${id}`)
      .then(response => response.json())
    })
    return {isError, isLoading, programmeData: data}
  }*/

  //const {isLoading, programmeData } = resultOneProgamme(requestOneProgramme.name)

  //console.log({programmeData}.programmeData.data.attributes.nom)


  return (
    <div className="container-programmes">
      <h1>Programmes</h1>
      <div>
        {
          programmes.map((prog) => (
            <Programme key={prog.id} programme={prog.attributes} />
          ))
        }
      </div>
      <h2>Chosen = {requestOneProgramme.name}</h2>


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
        <button onClick={() => {
          const obj = {
            name: inputParamById,
          };
          setRequestOneProgramme(obj)
          //resultOneProgamme(inputParamById);
        }}>Choose</button>


      </div>
      


    </div>
  )
}

export default Programmes
