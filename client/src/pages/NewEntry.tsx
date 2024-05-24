import { useEffect, useState } from "react"
import {addEntry} from '../../../js-solution/data'
import { UnsavedEntry } from "../../../js-solution/data";
import { type Entry } from "../../../js-solution/data";
import {data} from './data'
import { useNavigate } from 'react-router-dom'

export function NewEntry(){

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState('');

  type Props = {
    title:string,
    photoUrl:string,
    notes:string
  }

  useEffect(()=>{

  })

  function handleclick(){
    const newEntry = {title, photoUrl, notes}
    Object.defineProperty(newEntry, 'entryId', { value: data.nextEntryId });
    data.nextEntryId++;
    data.entries.unshift(newEntry);
    navigate('entries');
  }

  return (
    <>
      <h1>New Entry</h1>
      <img src={photoUrl}/>
      <input onChange={(e) => setTitle(e.target.value)} />
      <input onChange={(e) => setPhotoUrl(e.target.value)} />
      <textarea onChange={(e) => setNotes(e.target.value)} />
      <button onClick={handleclick}>Save</button>
    </>
  );
}
