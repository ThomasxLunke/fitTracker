import React, { useState } from 'react'
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import { slide as Menu } from 'react-burger-menu'
import Programmes from './pages/programme/Programmes';
import Exercices from './pages/exercice/Exercices';
import Seances from './pages/seance/Seances';
import "./style.css"
import Utilisateur from './pages/utilisateur/Utilisateur';


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //when i fetch something, don't refetch it
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})



const App = () => {


  const [menuOpen, setMenuOpen] = useState()

  function handleStateChange (state) {
    setMenuOpen(state.isOpen) 
  }

  return (
    <div className='container'>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <div>
            <Menu isOpen={menuOpen} onStateChange={(state) => handleStateChange(state)} >
              <Link onClick={() => {setMenuOpen(false)}} to="/">Utilisateur</Link>
              <Link onClick={() => {setMenuOpen(false)}} to="/programmes">Programmes</Link>
              <Link onClick={() => {setMenuOpen(false)}} to="/seances">Séances</Link>
              <Link onClick={() => {setMenuOpen(false)}} to="/exercices">Exercices</Link>
            </Menu>
          </div>
          <article>
            <Routes>
              <Route path="/" element={<Utilisateur />}/>
              <Route path="/programmes" element={<Programmes />} />
              <Route path="/exercices" element={<Exercices />} />
              <Route path="/seances" element={<Seances />} />
            </Routes>
          </article>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
};



const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);