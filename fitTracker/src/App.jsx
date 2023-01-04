import React from 'react'

import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Programmes from './pages/programme/Programmes';
import Exercices from './pages/exercice/Exercices';
import Seances from './pages/seance/Seances';
import HomePage from './pages/homepage/HomePage';
import Utilisateur from './pages/utilisateur/Utilisateur';
import BurgerMenu from './pages/components/BurgerMenu';

//import { ThemeProvider } from "@material-tailwind/react";


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
  return (
    <div className="w-100%">
      
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
            <BurgerMenu />
            <article>
              <Routes>
                <Route path="/" element={<Utilisateur />}/>
                <Route path="/programmes" element={<Programmes />} />
                <Route path="/exercices" element={<Exercices />} />
                <Route path="/seances" element={<Seances />} />
                <Route path="/home-page" element={<HomePage />} />
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