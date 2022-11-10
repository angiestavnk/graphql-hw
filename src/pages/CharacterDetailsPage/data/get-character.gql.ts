import { gql, useQuery } from "@apollo/client";

const GET_CHARACTER = gql`
  query GetCharacter($id: ID!){
    character (id: $id){
      name
      id
      image
      species
      gender
      status
    }
  }
`

export const useGetCharacter = (id: string | undefined) => {
  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id },
  })

  return { data, loading, error }
}
