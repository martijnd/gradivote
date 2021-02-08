import { gql, request } from 'graphql-request';
import { useQuery } from 'react-query';
import { Gradient } from '../types/gradient';
import { getUserUuid } from './userUuid';

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

export function addGradient(data: string) {
  const userUuid = getUserUuid();

  return request(
    process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
    gql`
        mutation {
          insert_gradients_one(object: { data: "${data}", user_uuid: "${userUuid}" }) {
            data
          }
        }
      `
  );
}

export function addVote(gradientUuid: string) {
  const userUuid = getUserUuid();

  return request(
    process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT,
    gql`
        mutation {
          insert_votes_one(object: { gradient_id: "${gradientUuid}", user_uuid: "${userUuid}" }) {
            gradient_id
          }
        }
      `
  );
}
