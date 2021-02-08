import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

// can also be a function that accepts a `context` object (SSR only) and returns a config
const config = {
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_GRAPHQL_ENDPOINT, // <- Configure GraphQL Server URL (must be absolute)
  })
}

export default withData(config)