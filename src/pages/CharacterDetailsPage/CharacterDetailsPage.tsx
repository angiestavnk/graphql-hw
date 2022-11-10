import { useParams } from "react-router-dom"
import NotFoundPage from "../NotFoundPage"
import { useGetCharacter } from "./data/get-character.gql"
import './style.css'

const CharacterDetailsPage = () => {
  const { id } = useParams()
  const { data, loading, error } = useGetCharacter(id)

  if(loading) {
    return <div>Loading...</div>
  }

  if(error) {
    return <NotFoundPage />
  }

  return (
    <div className="character-details">
      <div>Name: {data.character.name}</div>
      <div>Species: {data.character.species}</div>
      <div>Gender: {data.character.gender}</div>
      <div>Status: {data.character.status}</div>
      <img src={data.character.image}/>
    </div>
  )
}

export default CharacterDetailsPage
