import { API_ERROR_CODES } from '@api/clients/errorCodes';

export default (error) => {
  if (error && error.code === API_ERROR_CODES.INVALID_INPUT) {
    return (error.errors || []).reduce((prev, current) => {
      prev[current.key] = current.message;
      return prev;
    }, {});
  }
  return {};
};
