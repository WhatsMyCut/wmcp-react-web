const {
  REACT_APP_GRAPHQL_URI: graphqlUri,
  REACT_APP_BASENAME: basename,
  REACT_APP_SENTRY_URL: sentryUrl,
  REACT_APP_SENTRY_ENVIRONMENT: sentryEnvironment,
  REACT_APP_SENTRY_RELEASE: sentryRelease,
  GIT_SHA: gitSHA,
} = process.env;

export const BASENAME = basename;

export const GRAPHQL_URI = graphqlUri;

export const GIT_SHA = gitSHA;
export const TOKEN_COOKIE_KEY = 'oauth_admin_token';

export const SENTRY_URL = sentryUrl;
export const SENTRY_ENVIRONMENT = sentryEnvironment;
export const SENTRY_RELEASE = sentryRelease;

export const SEGMENT_KEY =
  process.env.REACT_APP_SEGMENT_KEY_ADMIN || process.env.REACT_APP_SEGMENT_KEY;

export const UI = {
  MOBILE_SIZE: [0, 767],
  TABLET_SIZE: [0, 991],
  DESKTOP_SIZE: [992, Number.MAX_SAFE_INTEGER],
};

export const USER_TYPES_URLS = {
  null: '/', // Fallback when type of user is unknown
};

export const API_ERROR_CODES = {
  UNAUTHORIZED: 'unauthorized',
  ACCESS_DENIED: 'access_denied',
  INVALID_INPUT: 'invalid_input',
  INTERNAL_ERROR: 'internal_error',
};

export const DATE_FORMAT_US = 'MM/DD/YYYY';
