import CharactersPage from "./pages/CharactersPage"
import { Route, Routes } from 'react-router-dom'
import CharacterDataPage from "./pages/CharacterDetailsPage"
import './App.css'
import NotFoundPage from "./pages/NotFoundPage"

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<CharactersPage />} />
        <Route path='/:id' element={<CharacterDataPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
