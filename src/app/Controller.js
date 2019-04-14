export default class Controller {
  constructor({/**/}) {

    ///////// events!

    const events = {};

    const norm = (name = '') => {
      const n = name.toLowerCase();
      const arr = (events[n] || []).slice();
      return {n, arr};
    };

    this.addEventListener = (name, callback) => {
      const {n, arr} = norm(name);
      if (n && 'function' === typeof callback)
        events[n] = arr.concat(callback);
    };

    this.removeEventListener = (name, callback) => {
      const {n, arr} = norm(name);
      events[n] = arr.reduce((arr, cb) => {
        return cb != callback ? arr.concat(cb) : arr;
      }, []);
    };

    this.dispatchEvent = (name, ...args) => {
      const {n, arr} = norm(name);
      arr.forEach(cb => cb({n, args}));
    };

    ///////// end events!

    // public

  }
}

