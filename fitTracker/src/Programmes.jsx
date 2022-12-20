import { useState } from 'react'
import { useQuery } from "@tanstack/react-query";
import Programme from './Programme'
import fetchProgrammes from './fetchProgrammes';
import fetchOneProgramme from './fetchOneProgramme';

function Programmes() {


  const [inputParamById, setinputParamById] = useState("");

  const [requestOneProgramme, setRequestOneProgramme] = useState({
        name: "",
  })

  const resultsProgammes = useQuery(["programmes"], fetchProgrammes);
  const programmes = resultsProgammes?.data?.data ?? [];
  
  const resultOneProgamme = useQuery(["programme",requestOneProgramme], fetchOneProgramme);
  const oneProgramme = resultOneProgamme?.data?.data.attributes ?? [];
  
  console.log(oneProgramme)

  return (
    <div className="Programmes">
      <h1>Liste Programmes :</h1>
      <div>
        {
            programmes.map((prog)=> (
                <Programme key={prog.id} programme={prog.attributes}/>
            ))
        }
      </div>
      <h2>Chosen = {requestOneProgramme.name}</h2>


      <div>
        <label htmlFor="chooseprog">
            Chose programme
            <input
                className="w-60 mb-5 block"
                type="text"
                name="chooseprog"
                id="chooseprog"
                placeholder="1 or 2 work, 3 not" 
                onChange={(e) => {setinputParamById(e.target.value)}}
            />
        </label>
        <button onClick={() =>{
            const obj = {
                name: inputParamById,
            };
            setRequestOneProgramme(obj);
        }}>Choose</button>

        <div>

            {oneProgramme.length === 0 ? 
            (
                <h4>No programme found</h4>
            ) :
            (
                <Programme key={oneProgramme.id} programme={oneProgramme}/>
            )}
        </div>
      </div>
      
      
    </div>
  )
}

export default Programmes
