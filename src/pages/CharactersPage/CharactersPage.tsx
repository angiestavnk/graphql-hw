import { Link } from "react-router-dom"
import NotFoundPage from "../NotFoundPage"
import { useGetCharacters } from "./data/get-characters.gql"
import './style.css'

const CharactersPage = () => {
  type Character = {
    id: string
    name: string
    image: string
  }

  const { error, data, loading } = useGetCharacters()

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <NotFoundPage />
  }
  
  return (
    <div className="characters-container">
      {data.characters.results.map((character: Character) => {
        return (
          <Link to={`/${character.id}`} key={character.id}>
            <div>Name: {character.name}</div>
            <img src={character.image} />
          </Link>
        )
      })}
    </div>
  )
}

export default CharactersPage
