import { Outlet } from "react-router-dom";

export function NavBar(){
  return(
    <>
      <button>title</button>
      <button>entries</button>
      <Outlet/>
    </>
  )
}
