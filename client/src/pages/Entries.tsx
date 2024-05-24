import { data } from "./data"

export function Entries(){

  const entries = data.entries.map((entry)=>{
    <li></li>
  })

  return(
    <>
      <div>
        <h1>Entries</h1>
        <button></button>
      </div>
      <ul>

      </ul>
    </>
  )
}
