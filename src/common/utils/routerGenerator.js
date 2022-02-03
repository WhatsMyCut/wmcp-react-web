/**
 * Class generator children routes
 */
class RouterGenerator {
  /**
   * @param {string=} basename - base path for children
   */
  constructor(basename = '/') {
    this.basename = basename;
    this.routes = [];
  }

  /**
   * add route
   * @param {string} path - router path
   * @param {className} component - react component
   * @param {boolean=} exact - exact url
   * @param {Object=} options - extra args
   * @returns {RouterGenerator}
   */
  addRoute(path, component, exact = false, options = {}) {
    const config = {
      localPath: path,
      path: `${this.basename}${path}`.replace('//', '/'),
      exact,
      component,
      options,
    };
    this.routes.push(config);
    return this;
  }

  /**
   * return routes
   */
  getRoutes() {
    return this.routes;
  }
}

export default RouterGenerator;
