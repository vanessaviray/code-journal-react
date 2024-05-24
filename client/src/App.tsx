import { NavBar } from './pages/NavBar';
import './App.css';
import { NewEntry } from './pages/NewEntry';
import { EditEntry } from './pages/EditEntry';
import { Entries } from './pages/Entries';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  return (
    <>
      <Routes>
        <Route path ='/' element={<NavBar/>}>
          <Route index element= {<NewEntry/>}/>
          <Route path='edit-entry' element={<EditEntry/>}/>
          <Route path='entries' element = {<Entries/>}/>
        </Route>
      </Routes>
    </>
  );
 }
