const keys = {
  token: 'hack-token'
};

const storage = {
  setHackToken: (token) => localStorage.setItem(keys.token, token),
  getHackToken: () => localStorage.getItem(keys.token)
};

export default storage;
