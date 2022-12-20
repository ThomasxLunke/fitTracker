import { useState } from 'react'
import Programmes from './Programmes'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      //when i fetch something, don't refetch it
      staleTime: Infinity,
      cacheTime: Infinity
    }
  }
})

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Programmes />
      </div>
    </QueryClientProvider>
  )
}

export default App
