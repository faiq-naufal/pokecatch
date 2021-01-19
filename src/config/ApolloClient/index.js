import { ApolloClient, InMemoryCache } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
  typePolicies: {
    PokemonList: {
      fields: {
        results: offsetLimitPagination(),
      },
    },
  },
});

export const client = new ApolloClient({
  uri: `https://graphql-pokeapi.vercel.app/api/graphql`,
  cache: cache,
});
