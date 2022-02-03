import history from '@common/utils/history';
import { clearToken } from '@common/utils/token';

const logout = () => {
  clearToken();
  history.replace('/login');
};

export default logout;
