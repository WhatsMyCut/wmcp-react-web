import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import apolloLogger from 'apollo-link-logger';

import { GRAPHQL_URI } from '../../app.constants';

import { getToken } from '../../common/utils/token';

import fragmentMatcher from './fragmentMatcher';
import handleApiErrors from './handleApiErrors';

const isProduction = process.env.NODE_ENV === 'production';

const httpLink = new BatchHttpLink({
  uri: GRAPHQL_URI,
});

const middlewareLink = setContext(() => {
  const headers = {};
  const authToken = getToken();
  if (authToken) {
    headers.Authorization = `Bearer ${authToken}`;
  }
  return {
    headers,
  };
});

const errorLink = onError(
  ({
    networkError = { statusCode: 200 },
    operation,
    graphQLErrors,
    response,
  }) => {
    handleApiErrors(
      networkError.statusCode,
      graphQLErrors,
      networkError,
      operation,
      response
    );
  }
);

const link = ApolloLink.from([
  middlewareLink,
  errorLink,
  ...(isProduction ? [] : [apolloLogger]),
  httpLink,
]);

const cache = new InMemoryCache({
  fragmentMatcher,
});

const client = new ApolloClient({
  link,
  cache: cache.restore(window.__APOLLO_CLIENT__), // eslint-disable-line no-underscore-dangle
});

export default client;
