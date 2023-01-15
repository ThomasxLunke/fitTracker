import React, { useState } from 'react'

import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Programmes from './pages/programme/Programmes';
import Exercices from './pages/exercice/Exercices';
import Seances from './pages/seance/Seances';
import HomePage from './pages/homepage/HomePage';
import Utilisateur from './pages/utilisateur/Utilisateur';
import BurgerMenu from './pages/components/BurgerMenu';
import AuthContext from './context/authContext';
import PrivateRoute from './context/PrivateRoute.jsx';
import login from './pages/homepage/fetch/login';
import AllExercicesContext from './pages/exercice/context/AllExercicesContext';


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
  
  const allExercices = useState([])
  const [isLoggedIn, setIsLoggedIn] = useState(login.isLoggedIn);
  return (
    <div className="w-100%">
      <AuthContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn
        }}
      >
        <BrowserRouter>
          <QueryClientProvider client={queryClient}>
                   
            <div>
              {
                isLoggedIn && <BurgerMenu />
              }
              <article>
                <AllExercicesContext.Provider value={allExercices}> 
                  <Routes>
                    <Route path="/home-page" element={<HomePage />} />
                    <Route exact path='/' element={<PrivateRoute/>}>
                      <Route exact path='/' element={<Utilisateur/>}/>
                      <Route path="/exercices" element={<Exercices />} />
                      <Route path="/seances" element={<Seances />} />
                      <Route path="/programmes" element={<Programmes />} />
                    </Route>
                  </Routes>
                </AllExercicesContext.Provider>
              </article>
              
            </div>
            
          </QueryClientProvider>
        </BrowserRouter>
      </AuthContext.Provider>

    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);