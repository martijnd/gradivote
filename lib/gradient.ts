import { gql, request } from 'graphql-request';
import { useQuery } from 'react-query';
import { Gradient } from '../types/gradient';

export function useGradients() {
  return useQuery<Gradient[], Error>('gradients', async () => {
    const { gradients } = await request(
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
      gql`
        query {
          gradients {
            uuid
            data
            user_uuid
            votes_aggregate {
              aggregate {
                count
              }
            }
          }
        }
      `
    );

    return gradients;
  });
}
