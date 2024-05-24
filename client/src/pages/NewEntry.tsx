import { useEffect, useState } from "react"
import {addEntry} from '../data'
import { useNavigate } from 'react-router-dom'
export type Props = {
  title: string;
  photoUrl: string;
  notes: string;
};

export function NewEntry(){

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [photoUrl, setPhotoUrl] = useState('');
  const [notes, setNotes] = useState('');
  // const [error, setError] = useState<unknown>();
  // const [isClick, setIsClick] = useState<object>();


const newEntry = { title, photoUrl, notes };


  function handleClick(){

    addEntry(newEntry)
    navigate('entries');
    // console.log(newEntry)
  }

  return (
    <>
      <h1>New Entry</h1>
      <img src={photoUrl}/>
      <input onChange={(e) => setTitle(e.target.value)} />
      <input onChange={(e) => setPhotoUrl(e.target.value)} />
      <textarea onChange={(e) => setNotes(e.target.value)} />
      <button onClick={handleClick}>Save</button>

    </>
  );
}
