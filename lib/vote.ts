import { gql, request } from 'graphql-request';
import { useQuery } from 'react-query';
import { Vote } from '../types/vote';

export function useVotes() {
  return useQuery<Vote[], Error>('votes', async () => {
    const { votes } = await request(
      process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
      gql`
        query {
          votes {
            uuid
            gradient_uuid
            user_uuid
          }
        }
      `
    );

    return votes;
  });
}
