import { TOKEN_COOKIE_KEY, ADMIN_URL } from '../../app.constants';

export const getToken = (key = TOKEN_COOKIE_KEY) => window.Cookies.get(key);

export const updateToken = (token, attributes, key = TOKEN_COOKIE_KEY) =>
  Cookies.set(key, token, attributes);

// Extract host from a URL and replace its leftmost subdomain with a leading dot.
// E.g. `https://4th.3rd.2nd.com/foo?bar` -> `.3rd.2nd.com`
const getCookieDomain = (url) => {
  try {
    const hostname = new URL(url).hostname.split(/\.(.*)/)[1];
    return `.${hostname}`;
  } catch (e) {
    return '.localhost';
  }
};

export const clearToken = () => {
  window.Cookies.remove(TOKEN_COOKIE_KEY);
  // In case simple remove didn't work
  // Cookies.remove(TOKEN_COOKIE_KEY, { domain: getCookieDomain(ADMIN_URL) });
};
