import { useEffect, useState } from "react"
import {addEntry} from '../../../js-solution/data'
import { UnsavedEntry } from "../../../js-solution/data";
import { type Entry } from "../../../js-solution/data";
export function NewEntry(){

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
    console.log('hiiiiiiiii')
  }
// export async function addEntry(entry: UnsavedEntry): Promise<Entry> {
//   const data = readData();
//   const newEntry = {
//     ...entry,
//     entryId: data.nextEntryId++,
//   };
//   data.entries.unshift(newEntry);
//   writeData(data);
//   return newEntry;
// }
console.log(title)

  return(
    <>
      <h1>New Entry</h1>
      <img/>
      <input onChange={(e)=> setTitle(e.target.value)}/>
      <input/>
      <textarea/>
      <button onClick={handleclick}>Save</button>
    </>
  )
}
