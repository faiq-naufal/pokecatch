import { gql } from "@apollo/client";

export const GET_POKEMONS = gql`
  query getPokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      results {
        id
        url
        name
        image
      }
    }
  }
`;

export const GET_POKEMON = gql`
  query getPokemon($name: String!) {
    pokemon(name: $name) {
      id
      name
      sprites {
        front_default
      }
      abilities {
        ability {
          name
        }
      }
      weight
      height
      types {
        type {
          name
        }
      }
      moves {
        move {
          name
        }
      }
    }
  }
`;
