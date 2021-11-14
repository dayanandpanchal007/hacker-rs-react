
class Auth {

  constructor() {
    this.validateUser();
  }

  validateUser = () => {
    const token = localStorage.getItem('hack-token');
    try {
      this.authenticated = token && token.split('.').length === 3;
    } catch {
      this.authenticated = false;
    }
  }

  login = (callback) => {
    this.authenticated = true;
    if (callback) {
      callback();
    }
  }

  logout = (callback) => {
    this.authenticated = false;
    localStorage.removeItem('hack-token');
    localStorage.removeItem('hack-employee');
    if (callback) {
      callback();
    }
  }

  isAuthenticated = () => {
    return this.authenticated;
  }
}

export default new Auth();
