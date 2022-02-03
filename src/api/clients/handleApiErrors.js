import { logException } from '../../common/sentry';
import { API_ERROR_CODES } from '../../../src/app.constants';
import { clearToken } from '../../common/utils/token';
import history from '../../common/utils/history';

const checks = [
  {
    check: (error) => error.code === API_ERROR_CODES.UNAUTHORIZED,
    action: (error) => {
      clearToken();
      const replaceArgs = { pathname: '/login' };
      if (error && error !== 'Login required.') {
        replaceArgs.state = { error };
      }
      history.replace(replaceArgs);
    },
  },
  {
    check: (error) => error.code === API_ERROR_CODES.INTERNAL_ERROR,
    action: () => history.push('/error500'),
  },
  {
    check: (error) => error.code === API_ERROR_CODES.INVALID_INPUT,
    action: (message, operation) =>
      logException(`Invalid input ${message}`, operation),
  },
];

const handleApiErrors = (
  status,
  graphQLErrors = [],
  networkError,
  operation,
  response
) => {
  let caught = false;
  graphQLErrors.forEach((error) => {
    checks.forEach(({ check, action }) => {
      if (check(error)) {
        caught = true;
        action(error.message, operation);

        if (response && error.code !== API_ERROR_CODES.INTERNAL_ERROR) {
          // Silent Apollo errors since it's already handled
          response.errors = null;
        }
      }
    });
  });
  if (status === 400) {
    logException(networkError, operation);
  }
  if (process.env.NODE_ENV === 'production' && !caught && status !== 200) {
    // FIXME: Use real history.push();
    history.push('/error500');
  }
};

export default handleApiErrors;
