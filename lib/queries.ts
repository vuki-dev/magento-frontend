import { gql } from '@apollo/client';

export const GET_CATEGORIES = gql`
  query GetCategories {
    categories(filters: { ids: { in: ["41","42"] } }) {  
      items {
        name
      }
    }
  }
`;
