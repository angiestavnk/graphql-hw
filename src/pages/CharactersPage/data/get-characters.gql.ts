import { gql, useQuery } from "@apollo/client";

export const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`

export const useGetCharacters = () => {
  const {error, loading, data} = useQuery(GET_CHARACTERS)

  return {error, loading, data}
}