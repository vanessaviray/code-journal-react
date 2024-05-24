import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import {  Entry, readEntries } from '../data';
// import { Props } from "./NewEntry"

export function Entries(){

  const [entry, setEntry] = useState<Entry[]>([])
  const [error, setError] = useState<unknown>()
  const navigate = useNavigate();


  useEffect(()=>{
    async function load(){
      try{
        const result = await readEntries()
        setEntry(result)
      }
      catch(error){
        setError(error)
      }
    }
    load();
  }, [])

  const liElem = entry.map((entry)=>(<li key={entry.entryId}>
    <img src={entry.photoUrl} alt ={entry.title}/>
    <h1>{entry.title}</h1>
    <p>{entry.notes}</p>
  </li>))
  console.log(liElem)


  if(error){
    return(
      <div>
        Error! {error instanceof Error? error.message : 'Unknown Error'}
      </div>
    )
  }

  return (
    <>
      <div className="container" data-view="entries">
        <div className="row">
          <div className="column-full d-flex justify-between align-center">
            <h1>Entries</h1>
            <h3>
              <button id="formLink" className="white-text form-link" onClick={()=>{navigate('/')}}>
                NEW
              </button>
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="column-full">
            <ul className="entry-ul" id="entryUl">
              {liElem}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
